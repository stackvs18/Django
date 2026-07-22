export interface MCQ {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  unit: "Unit 8" | "Unit 9" | "Unit 10";
  category: string;
}

export const MCQS: MCQ[] = [
  {
    id: 1,
    question: "Which Django management command is used to start a new feature app inside an existing project?",
    options: [
      "django-admin startproject <app_name>",
      "python manage.py startapp <app_name>",
      "python manage.py createapp <app_name>",
      "django-admin newapp <app_name>"
    ],
    correctIndex: 1,
    explanation: "python manage.py startapp <app_name> creates a new app directory containing models.py, views.py, admin.py, etc.",
    unit: "Unit 8",
    category: "CLI & Setup"
  },
  {
    id: 2,
    question: "What is the primary role of makemigrations in Django?",
    options: [
      "It directly modifies the sqlite3 database tables.",
      "It inspects models.py and creates new Python migration files describing database changes.",
      "It executes SQL scripts to populate default table rows.",
      "It checks if the HTML templates match the database schema."
    ],
    correctIndex: 1,
    explanation: "makemigrations inspects models.py and writes migration code files in the migrations/ folder. 'migrate' is what actually applies those changes to SQL database.",
    unit: "Unit 8",
    category: "ORM & Migrations"
  },
  {
    id: 3,
    question: "In Django's MVT pattern, what does the 'V' (View) handle?",
    options: [
      "Renders raw CSS styles and HTML layouts only.",
      "Receives HTTP requests, executes business logic/queries data, and returns an HTTP response.",
      "Defines database schema tables and foreign key constraints.",
      "Executes background cron jobs and server restarts."
    ],
    correctIndex: 1,
    explanation: "The View handles request processing, fetches objects via ORM, and returns an HttpResponse or rendered template.",
    unit: "Unit 8",
    category: "MVT Architecture"
  },
  {
    id: 4,
    question: "Which field option in Django models automatically sets the current timestamp when a model object is first created?",
    options: [
      "auto_now=True",
      "auto_now_add=True",
      "default=datetime.now()",
      "timestamp=True"
    ],
    correctIndex: 1,
    explanation: "auto_now_add=True sets the date/time automatically when the object is created for the first time.",
    unit: "Unit 8",
    category: "Models & Fields"
  },
  {
    id: 5,
    question: "When creating a ForeignKey field in a model (e.g., user = models.ForeignKey(User, ...)), what parameter is MANDATORY?",
    options: [
      "max_length",
      "on_delete",
      "blank=True",
      "unique=True"
    ],
    correctIndex: 1,
    explanation: "All many-to-one relationships (ForeignKey) in Django require an explicit on_delete behavior (e.g., models.CASCADE).",
    unit: "Unit 9",
    category: "Models & Relations"
  },
  {
    id: 6,
    question: "What does form.save(commit=False) do when processing a ModelForm in a view?",
    options: [
      "Saves the object directly into the database without running validation.",
      "Creates the model instance in memory without saving it to database yet, allowing manual field assignment.",
      "Rolls back the current database transaction.",
      "Throws a 400 Bad Request HTTP exception."
    ],
    correctIndex: 1,
    explanation: "commit=False returns an uncommitted model instance, allowing you to attach request.user or related FKs before saving.",
    unit: "Unit 9",
    category: "Forms & CRUD"
  },
  {
    id: 7,
    question: "Which template tag is MANDATORY inside every Django HTML <form method='POST'> to prevent Cross-Site Request Forgery attacks?",
    options: [
      "{% csrf %}",
      "{% csrf_token %}",
      "{{ csrf_protection }}",
      "{% security_token %}"
    ],
    correctIndex: 1,
    explanation: "{% csrf_token %} injects a hidden form input with a unique CSRF token verified on POST submissions.",
    unit: "Unit 9",
    category: "Forms & Security"
  },
  {
    id: 8,
    question: "Which function in django.contrib.auth checks user credentials (username & password) against the database?",
    options: [
      "login(request, user)",
      "authenticate(request, username=..., password=...)",
      "check_password(username, password)",
      "verify_user(credentials)"
    ],
    correctIndex: 1,
    explanation: "authenticate() verifies credentials and returns the User instance if valid, or None if invalid.",
    unit: "Unit 9",
    category: "Authentication"
  },
  {
    id: 9,
    question: "What setting in settings.py defines where unauthenticated users are redirected when hitting a @login_required protected view?",
    options: [
      "AUTH_REDIRECT_URL = '/login/'",
      "LOGIN_URL = 'loginaccount'",
      "REDIRECT_UNAUTHENTICATED = 'login'",
      "LOGIN_REDIRECT_URL = 'home'"
    ],
    correctIndex: 1,
    explanation: "LOGIN_URL = 'loginaccount' tells @login_required where to redirect unauthenticated users.",
    unit: "Unit 9",
    category: "Authentication"
  },
  {
    id: 10,
    question: "In Python's sqlite3 module, which method executes a single SQL statement containing multiple semicolon-separated commands?",
    options: [
      "cursor.execute()",
      "cursor.executemany()",
      "cursor.executescript()",
      "cursor.commit()"
    ],
    correctIndex: 2,
    explanation: "executescript() allows executing raw SQL scripts with multiple statements.",
    unit: "Unit 9",
    category: "SQLite3 Direct API"
  },
  {
    id: 11,
    question: "In Python sqlite3 direct API, which attribute of the connection object returns the number of database rows affected by recent DML queries?",
    options: [
      "cursor.rowcount",
      "conn.total_changes",
      "conn.affected_rows",
      "cursor.changes_count"
    ],
    correctIndex: 1,
    explanation: "conn.total_changes returns the total number of database rows modified, inserted, or deleted since connection opened.",
    unit: "Unit 9",
    category: "SQLite3 Direct API"
  },
  {
    id: 12,
    question: "What are the two primary responsibilities of a DRF Serializer?",
    options: [
      "Database schema creation and HTML template rendering",
      "Serialization (Python/Model -> JSON) and Deserialization (JSON -> Python dict + Validation)",
      "Routing URL paths and sending HTTP emails",
      "Caching static assets and executing migrations"
    ],
    correctIndex: 1,
    explanation: "Serializers translate complex Python objects into JSON and validate incoming JSON data to convert back into Python objects.",
    unit: "Unit 10",
    category: "DRF & Serializers"
  },
  {
    id: 13,
    question: "Which DRF component automatically handles standard CRUD actions (.list(), .create(), .retrieve(), .update(), .destroy()) in a single class?",
    options: [
      "APIView",
      "ModelViewSet",
      "DefaultRouter",
      "SerializerMethodField"
    ],
    correctIndex: 1,
    explanation: "ModelViewSet provides default full CRUD action implementations out of the box.",
    unit: "Unit 10",
    category: "DRF ViewSets"
  },
  {
    id: 14,
    question: "What component in DRF automatically generates standard RESTful URL endpoints for a ModelViewSet?",
    options: [
      "DefaultRouter",
      "URLPathVersioning",
      "ModelSerializer",
      "TokenObtainPairView"
    ],
    correctIndex: 0,
    explanation: "DefaultRouter auto-generates routes like /api/projects/ and /api/projects/{id}/ when registered with router.register().",
    unit: "Unit 10",
    category: "DRF Routers"
  },
  {
    id: 15,
    question: "A JWT (JSON Web Token) consists of three Base64URL-encoded strings separated by dots. What are they?",
    options: [
      "User.Pass.Token",
      "Header.Payload.Signature",
      "Client.Server.Secret",
      "Key.Cipher.Digest"
    ],
    correctIndex: 1,
    explanation: "A JWT structure is Header.Payload.Signature.",
    unit: "Unit 10",
    category: "JWT & Security"
  },
  {
    id: 16,
    question: "In SimpleJWT, what does TokenObtainPairView return upon successful POST of username and password?",
    options: [
      "A session ID cookie string",
      "A pair of tokens: short-lived 'access' token and long-lived 'refresh' token",
      "An HTML user profile page",
      "A 401 Unauthorized status"
    ],
    correctIndex: 1,
    explanation: "TokenObtainPairView exchanges login credentials for an access token (e.g. 5-15 mins) and refresh token (e.g. 24 hours).",
    unit: "Unit 10",
    category: "JWT & Security"
  },
  {
    id: 17,
    question: "How is an access token passed in HTTP requests to access protected DRF endpoints?",
    options: [
      "In the URL query string: ?token=<access_token>",
      "In the Authorization header: Bearer <access_token>",
      "In the Cookie header: sessionid=<access_token>",
      "In the request body: {'access_token': '<token>'}"
    ],
    correctIndex: 1,
    explanation: "The standard header format is 'Authorization: Bearer <access_token>'.",
    unit: "Unit 10",
    category: "JWT & Security"
  },
  {
    id: 18,
    question: "What permission class in DRF permits public read-only access (GET) while requiring JWT authentication for write actions (POST/PUT/DELETE)?",
    options: [
      "AllowAny",
      "IsAuthenticated",
      "IsAuthenticatedOrReadOnly",
      "IsAdminUser"
    ],
    correctIndex: 2,
    explanation: "IsAuthenticatedOrReadOnly allows unauthenticated GET requests, but restricts POST/PUT/DELETE to authenticated users.",
    unit: "Unit 10",
    category: "DRF Permissions"
  },
  {
    id: 19,
    question: "In DRF URLPathVersioning, how can a ViewSet dynamically choose a serializer based on the URL version requested?",
    options: [
      "By overriding the get_serializer_class(self) method and checking self.request.version",
      "By creating two separate database tables",
      "By adding @version_decorator to views.py",
      "By creating separate settings.py files"
    ],
    correctIndex: 0,
    explanation: "Overriding get_serializer_class(self) allows checking self.request.version == 'v2' to return BookSerializerV2.",
    unit: "Unit 10",
    category: "API Versioning"
  },
  {
    id: 20,
    question: "In Postman test scripts, which script automatically captures access token from /api/token/ response and sets an environment variable?",
    options: [
      "pm.environment.set('access_token', pm.response.json().access);",
      "postman.setToken(response.data);",
      "localStorage.setItem('token', response.token);",
      "pm.globals.save('access', response);"
    ],
    correctIndex: 0,
    explanation: "const data = pm.response.json(); pm.environment.set('access_token', data.access); automatically populates environment variables.",
    unit: "Unit 10",
    category: "Postman Testing"
  }
];
