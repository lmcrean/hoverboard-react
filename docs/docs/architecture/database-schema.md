# Database Schema

## Entity Relationship Diagram

Below is the entity relationship diagram for the Tributary application:

```mermaid
erDiagram
    User ||--o{ JobListing : saves
    User ||--o{ SearchQuery : performs
    JobListing }o--o{ Tag : contains
    SearchQuery ||--o{ SearchResult : produces
    SearchResult }o--|| JobListing : references
    
    User {
        string userId PK
        string email
        string name
        timestamp createdAt
        string subscriptionTier
        boolean isActive
    }
    
    JobListing {
        string listingId PK
        string userId FK
        string title
        string description
        string fullText
        timestamp postedDate
        timestamp savedDate
        string sourceUrl
        string location
        boolean isRemote
        string salaryRange
    }
    
    Tag {
        string tagId PK
        string name
        string category
    }
    
    SearchQuery {
        string queryId PK
        string userId FK
        string keywords
        timestamp createdAt
        json filters
        boolean isSaved
    }
    
    SearchResult {
        string resultId PK
        string queryId FK
        string listingId FK
        int matchCount
        json matchLocations
        float relevanceScore
    }
```

## Entity Descriptions

### User
Stores user account information, authentication details, and subscription status. This entity tracks who is using the platform and what level of service they have access to.

### JobListing
Contains complete job listings saved by users, including the full text for keyword analysis. This is the core data that users collect and later analyze for trends and patterns.

### Tag
Keywords, skills, technologies, and other metadata extracted from job listings. These may be automatically extracted or manually added, and enhance searchability.

### SearchQuery
Records of keyword searches performed by users, including search parameters and filters. Preserves search history and enables repeated or refined searches.

### SearchResult
Results of keyword searches, showing which job listings matched and their relevance. Stores detailed information about matches to support aggregated reporting. 