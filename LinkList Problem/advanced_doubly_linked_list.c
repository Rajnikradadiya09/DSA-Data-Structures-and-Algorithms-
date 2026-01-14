// Hard & Dynamic Linked List Program in C
// Doubly Linked List + Merge Sort + Reverse + Cycle Detection + Menu
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *prev, *next;
} Node;

static Node* newNode(int x) {
    Node* n = (Node*)malloc(sizeof(Node));
    if (!n) {
        printf("Memory allocation failed!\n");
        exit(1);
    }
    n->data = x;
    n->prev = n->next = NULL;
    return n;
}

static void printList(Node* head) {
    printf("List: ");
    for (Node* cur = head; cur; cur = cur->next) {
        printf("%d ", cur->data);
    }
    printf("\n");
}

static int length(Node* head) {
    int c = 0;
    for (; head; head = head->next) c++;
    return c;
}

static void pushFront(Node** head, int x) {
    Node* n = newNode(x);
    n->next = *head;
    if (*head) (*head)->prev = n;
    *head = n;
}

static void pushBack(Node** head, int x) {
    Node* n = newNode(x);
    if (!*head) {
        *head = n;
        return;
    }
    Node* cur = *head;
    while (cur->next) cur = cur->next;
    cur->next = n;
    n->prev = cur;
}

static void insertAt(Node** head, int pos, int x) {
    // pos: 0-based
    if (pos <= 0 || !*head) {
        pushFront(head, x);
        return;
    }
    int nlen = length(*head);
    if (pos >= nlen) {
        pushBack(head, x);
        return;
    }
    Node* cur = *head;
    for (int i = 0; i < pos; i++) cur = cur->next;

    Node* n = newNode(x);
    n->prev = cur->prev;
    n->next = cur;
    cur->prev->next = n;
    cur->prev = n;
}

static void deleteAt(Node** head, int pos) {
    if (!*head) return;
    if (pos <= 0) {
        Node* tmp = *head;
        *head = (*head)->next;
        if (*head) (*head)->prev = NULL;
        free(tmp);
        return;
    }
    Node* cur = *head;
    for (int i = 0; cur && i < pos; i++) cur = cur->next;
    if (!cur) return;

    if (cur->prev) cur->prev->next = cur->next;
    if (cur->next) cur->next->prev = cur->prev;
    free(cur);
}

static void reverseList(Node** head) {
    if (!*head) return;
    Node* cur = *head;
    Node* last = NULL;
    while (cur) {
        Node* nxt = cur->next;
        cur->next = cur->prev;
        cur->prev = nxt;
        last = cur;
        cur = nxt;
    }
    *head = last;
}

/* ---------- Merge Sort for Doubly Linked List ---------- */

static Node* split(Node* head) {
    // split into two halves, return head of second half
    Node *slow = head, *fast = head;
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    Node* second = slow->next;
    slow->next = NULL;
    if (second) second->prev = NULL;
    return second;
}

static Node* mergeSorted(Node* a, Node* b) {
    if (!a) return b;
    if (!b) return a;

    if (a->data <= b->data) {
        a->next = mergeSorted(a->next, b);
        if (a->next) a->next->prev = a;
        a->prev = NULL;
        return a;
    } else {
        b->next = mergeSorted(a, b->next);
        if (b->next) b->next->prev = b;
        b->prev = NULL;
        return b;
    }
}

static Node* mergeSort(Node* head) {
    if (!head || !head->next) return head;
    Node* second = split(head);
    head = mergeSort(head);
    second = mergeSort(second);
    return mergeSorted(head, second);
}

/* ---------- Cycle Detection (Floyd) ---------- */
/* Note: A proper doubly list shouldn't have cycles in normal use,
   but this checks for pointer mistakes / corrupted lists. */
static int hasCycle(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return 1;
    }
    return 0;
}

static void freeList(Node** head) {
    Node* cur = *head;
    while (cur) {
        Node* nxt = cur->next;
        free(cur);
        cur = nxt;
    }
    *head = NULL;
}

int main(void) {
    Node* head = NULL;
    int choice, x, pos;

    while (1) {
        printf("\n--- Dynamic Doubly Linked List (Hard Program) ---\n");
        printf("1. Push Front\n");
        printf("2. Push Back\n");
        printf("3. Insert At Position\n");
        printf("4. Delete At Position\n");
        printf("5. Print\n");
        printf("6. Reverse\n");
        printf("7. Merge Sort\n");
        printf("8. Detect Cycle\n");
        printf("9. Free All\n");
        printf("0. Exit\n");
        printf("Enter choice: ");

        if (scanf("%d", &choice) != 1) {
            printf("Invalid input.\n");
            break;
        }

        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &x);
                pushFront(&head, x);
                break;

            case 2:
                printf("Enter value: ");
                scanf("%d", &x);
                pushBack(&head, x);
                break;

            case 3:
                printf("Enter position (0-based) and value: ");
                scanf("%d %d", &pos, &x);
                insertAt(&head, pos, x);
                break;

            case 4:
                printf("Enter position (0-based): ");
                scanf("%d", &pos);
                deleteAt(&head, pos);
                break;

            case 5:
                printList(head);
                break;

            case 6:
                reverseList(&head);
                printf("Reversed.\n");
                break;

            case 7:
                head = mergeSort(head);
                printf("Sorted.\n");
                break;

            case 8:
                printf("Cycle: %s\n", hasCycle(head) ? "YES" : "NO");
                break;

            case 9:
                freeList(&head);
                printf("Freed all nodes.\n");
                break;

            case 0:
                freeList(&head);
                printf("Bye.\n");
                return 0;

            default:
                printf("Invalid choice.\n");
        }
    }

    freeList(&head);
    return 0;
}
