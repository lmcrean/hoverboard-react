```mermaid
erDiagram
    User {
        int id PK
        string firstName
        string lastName
        string email
        string mobileNumber
        string school
        string jobTitle
        datetime createdAt
        datetime updatedAt
    }
    
    EmailNotification {
        int id PK
        int userId FK
        string emailSubject
        string emailBody
        boolean isSent
        datetime sentAt
        datetime createdAt
    }
    
    SignupRequest {
        int id PK
        int userId FK
        string status
        datetime createdAt
        datetime processedAt
    }
    
    User ||--o{ EmailNotification : "receives"
    User ||--o{ SignupRequest : "creates"