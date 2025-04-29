# Naming Convention Strategy

## Overview

This document outlines our approach to handling naming conventions across the Hoverboard application stack, specifically addressing the mismatch between PostgreSQL's snake_case convention and JavaScript/Express's camelCase convention.

## Convention Strategy

We will follow industry best practices by using:

1. **Database Layer (PostgreSQL)**: `snake_case`
   - Table names: `user`, `job_listing`, `contact`
   - Column names: `user_id`, `job_title`, `created_at`
   - Foreign keys: `user_id`, `listing_id`, `keyword_id`

2. **API Layer (Express.js)**: `camelCase`
   - Request/response properties: `userId`, `jobTitle`, `createdAt`
   - Variable names: `userId`, `jobListing`, `keywordCount`
   - Function names: `getUserById()`, `createJobListing()`

3. **Frontend (React)**: `camelCase`
   - Component props: `userId`, `jobTitle`, `onSave`
   - Variable names: `userData`, `listingDetails`
   - Function names: `handleSubmit()`, `fetchUserData()`

## Implementation Approach

### Database Setup

```sql
CREATE TABLE job_listing (
  listing_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES user(user_id),
  company VARCHAR(255),
  job_title VARCHAR(255),
  full_text TEXT,
  status VARCHAR(50),
  notes TEXT,
  saved_date TIMESTAMP
);
```

### ORM Configuration (Sequelize)

```javascript
const JobListing = sequelize.define('JobListing', {
  listingId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'listing_id' // Maps to snake_case column in database
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id'
  },
  jobTitle: {
    type: DataTypes.STRING,
    field: 'job_title'
  },
  // Other fields following same pattern
}, {
  tableName: 'job_listing', // Explicit snake_case table name
  underscored: true // Automatically converts camelCase attributes to snake_case columns
});
```

### API Controllers

```javascript
// Express route handler
router.get('/job-listings/:listingId', async (req, res) => {
  try {
    const { listingId } = req.params;
    const jobListing = await JobListing.findByPk(listingId);
    
    // jobListing properties are automatically in camelCase
    // when returned to the client
    res.json(jobListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### API Response Examples

```json
// GET /api/job-listings/123
{
  "listingId": 123,
  "userId": 456,
  "company": "Acme Inc",
  "jobTitle": "Full Stack Developer",
  "fullText": "Job description goes here...",
  "status": "bookmarked",
  "notes": "Looks promising",
  "savedDate": "2023-05-15T14:30:00Z"
}
```

## Tools & Libraries

To help maintain this convention strategy:

1. **Sequelize ORM**: Will handle the mapping between JavaScript camelCase and PostgreSQL snake_case
   - Configure with `underscored: true` option

2. **ESLint**: To enforce camelCase in JavaScript code
   - Use the `camelcase` rule

3. **Database Migration Library**: To ensure consistent schema naming
   - Use migrations for all schema changes
   - Follow naming conventions in migration files

## Benefits of This Approach

1. **Native Conventions**: Each technology in the stack uses its own conventional naming pattern
2. **Clean API**: Client-facing APIs follow JavaScript conventions
3. **Maintainability**: Developers can follow standard expectations for each layer
4. **Automated Translation**: Minimal cognitive overhead with ORM handling the conversion

## Documentation Standards

All documentation (including API docs) should use camelCase when referring to API properties, aligning with what API consumers will actually see.

## Edge Cases

- **SQL Queries**: Raw SQL queries should use snake_case
- **Database Views**: Should follow the snake_case convention
- **JSON Columns**: When storing JSON in PostgreSQL, the internal properties should use camelCase as they're part of the JavaScript domain 