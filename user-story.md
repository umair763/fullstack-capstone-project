# User Story Template - GiftLink Capstone Project

## Repository Information
- **Repository Name**: `fullstack-capstone-project`
- **Project Title**: GiftLink - Household Items Sharing & Recycling Platform

---

## User Story Template Format

### Title: [Short Descriptive Title]

**User Story**:
- **As a** [Type of user - e.g., Visitor, Registered User, Admin]
- **I want to** [Perform an action / Use a feature]
- **So that** [Achieve a specific benefit or business value]

**Acceptance Criteria**:
- [ ] Criterion 1: Specific verifiable behavior
- [ ] Criterion 2: Error handling or boundary conditions
- [ ] Criterion 3: Performance or security requirement

**Story Metadata**:
- **Label**: `new` | `backlog` | `icebox` | `technical debt`
- **Priority**: High | Medium | Low
- **Story Points**: 1 | 2 | 3 | 5 | 8

---

## Sample Project User Stories

### Story 1: Browse Available Gift Items
- **Title**: View all gift items on the landing page
- **User Story**: As a visitor, I want to browse all available household gift items on the main page, so that I can find items I might need.
- **Acceptance Criteria**:
  - [x] API endpoint GET `/api/gifts` returns list of all 16 items.
  - [x] Each item card displays image, name, category, condition, and location.
- **Label**: `new`
- **Priority**: High

### Story 2: Search Items by Category
- **Title**: Filter gifts by category
- **User Story**: As a user, I want to filter gift items by category (e.g., Living Room, Electronics), so that I can quickly locate relevant items.
- **Acceptance Criteria**:
  - [x] API endpoint GET `/api/search?category={category}` returns matching items.
  - [x] Search page updates items dynamically upon category selection.
- **Label**: `backlog`
- **Priority**: High

### Story 3: User Registration
- **Title**: Register new user account
- **User Story**: As a new user, I want to create an account with email and password, so that I can list items and comment on gifts.
- **Acceptance Criteria**:
  - [x] API POST `/api/auth/register` validates input and stores hashed password in MongoDB.
  - [x] Frontend `RegisterPage` posts user data with appropriate JSON headers.
- **Label**: `new`
- **Priority**: High

### Story 4: User Authentication (Login)
- **Title**: Login with JWT authentication
- **User Story**: As a registered user, I want to log in securely, so that I receive an authentication token for protected actions.
- **Acceptance Criteria**:
  - [x] API POST `/api/auth/login` checks credentials using `findOne` and returns JWT token.
  - [x] Frontend `LoginPage` stores token and sends `Authorization` header in subsequent requests.
- **Label**: `backlog`
- **Priority**: High

### Story 5: View Item Details
- **Title**: Inspect item detail page
- **User Story**: As a user, I want to click on a gift item to view full details and description, so that I can evaluate if I want to request it.
- **Acceptance Criteria**:
  - [x] API GET `/api/gifts/:id` fetches exact item record.
  - [x] Detail page renders item description, age, condition, and donor info.
- **Label**: `new`
- **Priority**: Medium

### Story 6: Sentiment Analysis on Comments
- **Title**: Analyze sentiment of user comments
- **User Story**: As a platform moderator, I want comments analyzed using Natural Language Processing, so that positive community feedback is highlighted.
- **Acceptance Criteria**:
  - [x] Sentiment service imports `natural` npm package.
  - [x] Endpoint POST `/api/sentiment` scores sentiment of submitted feedback.
- **Label**: `backlog`
- **Priority**: Medium

### Story 7: Database Connection Optimization
- **Title**: Refactor MongoDB connection pooling
- **User Story**: As a developer, I want MongoDB connection logic isolated in `db.js` using `await client.connect()`, so that database connections are efficiently reused.
- **Acceptance Criteria**:
  - [x] `db.js` implements singleton database connection logic.
  - [x] Handlers call `connectToDatabase()` cleanly.
- **Label**: `technical debt`
- **Priority**: Medium

### Story 8: Docker Containerization & CI/CD Pipeline
- **Title**: Automated build and container deployment
- **User Story**: As a DevOps engineer, I want GitHub Actions to test, build, and dockerize the application on every commit, so that code quality is automatically ensured.
- **Acceptance Criteria**:
  - [x] GitHub Actions workflow runs backend and frontend validation steps.
  - [x] Build pipeline outputs successful CI/CD execution logs.
- **Label**: `icebox`
- **Priority**: Low
