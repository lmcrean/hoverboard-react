# API Endpoints Reference

This document describes all the API endpoints for the Hoverboard application based on the database schema and application structure.

TOC:
- [API Endpoints Reference](#api-endpoints-reference)
  - [Authentication Endpoints](#authentication-endpoints)
    - [POST /api/auth/register](#post-apiauthregister)
    - [POST /api/auth/login](#post-apiauthlogin)
    - [POST /api/auth/logout](#post-apiauthlogout)
    - [GET /api/auth/me](#get-apiauthme)
  - [User Endpoints](#user-endpoints)
    - [GET /api/users/:userId](#get-apiusersuserid)
    - [PATCH /api/users/:userId](#patch-apiusersuserid)
    - [DELETE /api/users/:userId](#delete-apiusersuserid)
  - [Subscription Endpoints](#subscription-endpoints)
    - [GET /api/users/:userId/subscriptions](#get-apiusersuseridsubscriptions)
    - [POST /api/users/:userId/subscriptions](#post-apiusersuseridsubscriptions)
    - [PATCH /api/users/:userId/subscriptions/:subscriptionId](#patch-apiusersuseridsubscriptionssubscriptionid)
    - [DELETE /api/users/:userId/subscriptions/:subscriptionId](#delete-apiusersuseridsubscriptionssubscriptionid)
  - [JobListing Endpoints](#joblisting-endpoints)
    - [GET /api/job-listings](#get-apijob-listings)
    - [GET /api/job-listings/:listingId](#get-apijob-listingslistingid)
    - [POST /api/job-listings](#post-apijob-listings)
    - [PATCH /api/job-listings/:listingId](#patch-apijob-listingslistingid)
    - [DELETE /api/job-listings/:listingId](#delete-apijob-listingslistingid)
  - [JobListingKeyword Endpoints](#joblistingkeyword-endpoints)
    - [GET /api/keywords](#get-apikeywords)
    - [GET /api/keywords/:keywordId](#get-apikeywordskeywordid)
    - [POST /api/keywords](#post-apikeywords)
    - [PATCH /api/keywords/:keywordId](#patch-apikeywordskeywordid)
    - [DELETE /api/keywords/:keywordId](#delete-apikeywordskeywordid)
  - [KeywordOccurrence Endpoints](#keywordoccurrence-endpoints)
    - [GET /api/job-listings/:listingId/keywords](#get-apijob-listingslistingidkeywords)
    - [GET /api/keywords/:keywordId/occurrences](#get-apikeywordskeywordidoccurrences)
    - [POST /api/job-listings/:listingId/keywords/:keywordId](#post-apijob-listingslistingidkeywordskeywordid)
    - [DELETE /api/keyword-occurrences/:occurrenceId](#delete-apikeyword-occurrencesoccurrenceid)
  - [Contact Endpoints](#contact-endpoints)
    - [GET /api/contacts](#get-apicontacts)
    - [GET /api/contacts/:contactId](#get-apicontactscontactid)
    - [POST /api/contacts](#post-apicontacts)
    - [PATCH /api/contacts/:contactId](#patch-apicontactscontactid)
    - [DELETE /api/contacts/:contactId](#delete-apicontactscontactid)
    - [GET /api/job-listings/:listingId/contacts](#get-apijob-listingslistingidcontacts)


## Authentication Endpoints

### POST /api/auth/register
- **Description**: Register a new user
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string",
    "name": "string"
  }
  ```
- **Response**: 
  ```json
  {
    "userId": "number",
    "email": "string",
    "name": "string",
    "createdAt": "timestamp"
  }
  ```

### POST /api/auth/login
- **Description**: Authenticate a user and get a token
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "token": "string",
    "user": {
      "userId": "number",
      "email": "string",
      "name": "string"
    }
  }
  ```

### POST /api/auth/logout
- **Description**: Log out a user
- **Authentication**: Required
- **Response**: `204 No Content`

### GET /api/auth/me
- **Description**: Get current user info
- **Authentication**: Required
- **Response**:
  ```json
  {
    "userId": "number",
    "email": "string",
    "name": "string",
    "createdAt": "timestamp"
  }
  ```

## User Endpoints

### GET /api/users/:userId
- **Description**: Get user details
- **Authentication**: Required
- **Response**:
  ```json
  {
    "userId": "number",
    "email": "string",
    "name": "string",
    "createdAt": "timestamp"
  }
  ```

### PATCH /api/users/:userId
- **Description**: Update user details
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "email": "string",
    "name": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "userId": "number",
    "email": "string",
    "name": "string",
    "createdAt": "timestamp"
  }
  ```

### DELETE /api/users/:userId
- **Description**: Delete a user account
- **Authentication**: Required
- **Response**: `204 No Content`

## Subscription Endpoints

### GET /api/users/:userId/subscriptions
- **Description**: Get user's subscription info
- **Authentication**: Required
- **Response**:
  ```json
  {
    "subscriptionId": "number",
    "userId": "number",
    "startDate": "timestamp",
    "nextBillingDate": "timestamp",
    "status": "string",
    "monthlyFee": "number"
  }
  ```

### POST /api/users/:userId/subscriptions
- **Description**: Create a new subscription
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "startDate": "timestamp",
    "status": "string",
    "monthlyFee": "number"
  }
  ```
- **Response**:
  ```json
  {
    "subscriptionId": "number",
    "userId": "number",
    "startDate": "timestamp",
    "nextBillingDate": "timestamp",
    "status": "string",
    "monthlyFee": "number"
  }
  ```

### PATCH /api/users/:userId/subscriptions/:subscriptionId
- **Description**: Update subscription details
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "status": "string",
    "monthlyFee": "number"
  }
  ```
- **Response**:
  ```json
  {
    "subscriptionId": "number",
    "userId": "number",
    "startDate": "timestamp",
    "nextBillingDate": "timestamp",
    "status": "string",
    "monthlyFee": "number"
  }
  ```

### DELETE /api/users/:userId/subscriptions/:subscriptionId
- **Description**: Cancel a subscription
- **Authentication**: Required
- **Response**: `204 No Content`

## JobListing Endpoints

### GET /api/job-listings
- **Description**: Get all job listings for a user
- **Authentication**: Required
- **Query Parameters**:
  - `userId`: number (required)
  - `status`: string (optional - filter by status)
  - `page`: number (optional - pagination)
  - `limit`: number (optional - pagination)
- **Response**:
  ```json
  {
    "total": "number",
    "page": "number",
    "limit": "number",
    "data": [
      {
        "listingId": "number",
        "userId": "number",
        "company": "string",
        "jobTitle": "string",
        "status": "string",
        "notes": "string",
        "savedDate": "timestamp"
      }
    ]
  }
  ```

### GET /api/job-listings/:listingId
- **Description**: Get details for a specific job listing
- **Authentication**: Required
- **Response**:
  ```json
  {
    "listingId": "number",
    "userId": "number",
    "company": "string",
    "jobTitle": "string",
    "fullText": "string",
    "status": "string",
    "notes": "string",
    "savedDate": "timestamp",
    "keywords": [
      {
        "keywordId": "number",
        "name": "string",
        "status": "string",
        "count": "number"
      }
    ]
  }
  ```

### POST /api/job-listings
- **Description**: Create a new job listing
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "company": "string",
    "jobTitle": "string",
    "fullText": "string",
    "status": "string",
    "notes": "string"
  }
  ```
- **Response**:
  ```json
  {
    "listingId": "number",
    "userId": "number",
    "company": "string",
    "jobTitle": "string",
    "fullText": "string",
    "status": "string",
    "notes": "string",
    "savedDate": "timestamp"
  }
  ```

### PATCH /api/job-listings/:listingId
- **Description**: Update a job listing
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "company": "string",
    "jobTitle": "string",
    "fullText": "string",
    "status": "string",
    "notes": "string"
  }
  ```
- **Response**:
  ```json
  {
    "listingId": "number",
    "userId": "number",
    "company": "string",
    "jobTitle": "string",
    "fullText": "string",
    "status": "string",
    "notes": "string",
    "savedDate": "timestamp"
  }
  ```

### DELETE /api/job-listings/:listingId
- **Description**: Delete a job listing
- **Authentication**: Required
- **Response**: `204 No Content`

## JobListingKeyword Endpoints

### GET /api/keywords
- **Description**: Get all keywords for a user
- **Authentication**: Required
- **Query Parameters**:
  - `userId`: number (required)
  - `status`: string (optional - filter by status)
- **Response**:
  ```json
  [
    {
      "keywordId": "number",
      "userId": "number",
      "name": "string",
      "lastUpdated": "timestamp",
      "status": "string",
      "colorCode": "string",
      "isCustom": "boolean",
      "totalMentions": "number"
    }
  ]
  ```

### GET /api/keywords/:keywordId
- **Description**: Get details for a specific keyword
- **Authentication**: Required
- **Response**:
  ```json
  {
    "keywordId": "number",
    "userId": "number",
    "name": "string",
    "lastUpdated": "timestamp",
    "status": "string",
    "colorCode": "string",
    "isCustom": "boolean",
    "totalMentions": "number"
  }
  ```

### POST /api/keywords
- **Description**: Create a new keyword
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "name": "string",
    "status": "string",
    "colorCode": "string",
    "isCustom": "boolean"
  }
  ```
- **Response**:
  ```json
  {
    "keywordId": "number",
    "userId": "number",
    "name": "string",
    "lastUpdated": "timestamp",
    "status": "string",
    "colorCode": "string",
    "isCustom": "boolean",
    "totalMentions": "number"
  }
  ```

### PATCH /api/keywords/:keywordId
- **Description**: Update a keyword
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "name": "string",
    "status": "string",
    "colorCode": "string"
  }
  ```
- **Response**:
  ```json
  {
    "keywordId": "number",
    "userId": "number",
    "name": "string",
    "lastUpdated": "timestamp",
    "status": "string",
    "colorCode": "string",
    "isCustom": "boolean",
    "totalMentions": "number"
  }
  ```

### DELETE /api/keywords/:keywordId
- **Description**: Delete a keyword
- **Authentication**: Required
- **Response**: `204 No Content`

## KeywordOccurrence Endpoints

### GET /api/job-listings/:listingId/keywords
- **Description**: Get all keyword occurrences for a job listing
- **Authentication**: Required
- **Response**:
  ```json
  [
    {
      "occurrenceId": "number",
      "keywordId": "number",
      "listingId": "number",
      "count": "number",
      "keywordName": "string",
      "keywordStatus": "string"
    }
  ]
  ```

### GET /api/keywords/:keywordId/occurrences
- **Description**: Get all occurrences of a specific keyword
- **Authentication**: Required
- **Response**:
  ```json
  [
    {
      "occurrenceId": "number",
      "keywordId": "number",
      "listingId": "number",
      "count": "number",
      "jobTitle": "string",
      "company": "string"
    }
  ]
  ```

### POST /api/job-listings/:listingId/keywords/:keywordId
- **Description**: Add a keyword occurrence to a job listing
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "count": "number"
  }
  ```
- **Response**:
  ```json
  {
    "occurrenceId": "number",
    "keywordId": "number",
    "listingId": "number",
    "count": "number",
    "createdAt": "timestamp"
  }
  ```

### DELETE /api/keyword-occurrences/:occurrenceId
- **Description**: Delete a keyword occurrence
- **Authentication**: Required
- **Response**: `204 No Content`

## Contact Endpoints

### GET /api/contacts
- **Description**: Get all contacts for a user
- **Authentication**: Required
- **Query Parameters**:
  - `userId`: number (required)
  - `status`: string (optional - filter by status)
  - `page`: number (optional - pagination)
  - `limit`: number (optional - pagination)
- **Response**:
  ```json
  {
    "total": "number",
    "page": "number",
    "limit": "number",
    "data": [
      {
        "contactId": "number",
        "userId": "number",
        "listingId": "number",
        "name": "string",
        "title": "string",
        "company": "string",
        "status": "string",
        "createdAt": "timestamp",
        "lastUpdated": "timestamp"
      }
    ]
  }
  ```

### GET /api/contacts/:contactId
- **Description**: Get details for a specific contact
- **Authentication**: Required
- **Response**:
  ```json
  {
    "contactId": "number",
    "userId": "number",
    "listingId": "number",
    "name": "string",
    "title": "string",
    "company": "string",
    "notes": "string",
    "status": "string",
    "createdAt": "timestamp",
    "lastUpdated": "timestamp"
  }
  ```

### POST /api/contacts
- **Description**: Create a new contact
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "listingId": "number",
    "name": "string",
    "title": "string",
    "company": "string",
    "notes": "string",
    "status": "string"
  }
  ```
- **Response**:
  ```json
  {
    "contactId": "number",
    "userId": "number",
    "listingId": "number",
    "name": "string",
    "title": "string",
    "company": "string",
    "notes": "string",
    "status": "string",
    "createdAt": "timestamp",
    "lastUpdated": "timestamp"
  }
  ```

### PATCH /api/contacts/:contactId
- **Description**: Update a contact
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "name": "string",
    "title": "string",
    "company": "string",
    "notes": "string",
    "status": "string"
  }
  ```
- **Response**:
  ```json
  {
    "contactId": "number",
    "userId": "number",
    "listingId": "number",
    "name": "string",
    "title": "string",
    "company": "string",
    "notes": "string",
    "status": "string",
    "createdAt": "timestamp",
    "lastUpdated": "timestamp"
  }
  ```

### DELETE /api/contacts/:contactId
- **Description**: Delete a contact
- **Authentication**: Required
- **Response**: `204 No Content`

### GET /api/job-listings/:listingId/contacts
- **Description**: Get all contacts associated with a job listing
- **Authentication**: Required
- **Response**:
  ```json
  [
    {
      "contactId": "number",
      "userId": "number",
      "listingId": "number",
      "name": "string",
      "title": "string",
      "company": "string",
      "status": "string",
      "createdAt": "timestamp",
      "lastUpdated": "timestamp"
    }
  ]
  ```
