## Entity Relationship Diagram

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryTextColor': '#ffffff', 'primaryColor': '#ffffff', 'noteBkgColor': '#2b2b2b', 'noteTextColor': '#ffffff' }}}%%
erDiagram
    User ||--o{ JobListing : saves
    User ||--o{ JobListingKeyword : tracks
    User ||--o{ Subscription : has
    User ||--o{ Contact : manages
    JobListing }o--o{ JobListingKeyword : contains
    JobListing }o--o{ Contact : has
    JobListingKeyword }o--o{ JobListingKeywordOccurrence : has
    
    User {
        int userId PK
        string email
        string password
        string name
        timestamp createdAt
    }
    
    Subscription {
        int subscriptionId PK
        int userId FK
        timestamp startDate
        timestamp nextBillingDate
        string status
        decimal monthlyFee
    }
    
    JobListing {
        int listingId PK
        int userId FK
        string company
        string jobTitle
        string fullText
        string status "bookmarked/applied/interviewing/offered/hired/rejected"
        string notes
        timestamp savedDate
    }
    
    JobListingKeyword {
        int keywordId PK
        int userId FK
        string name
        timestamp lastUpdated "calculated on read"
        string status "have/learning/need"
        string colorCode "HEX"
        boolean isCustom
        int totalMentions "calculated on read"
    }

    JobListingKeywordOccurrence {
        int occurrenceId PK
        int keywordId FK
        int listingId FK
        int count "number of times keyword appears in listing"
        timestamp createdAt
    }

    Contact {
        int contactId PK
        int userId FK
        int listingId FK "optional, if contact is from a job listing"
        string name
        string title
        string company
        string notes
        timestamp createdAt
        timestamp lastUpdated
        string status "bookmarked/contacted"
    }
```