--Table creation for users, courses, Lessons, Enrollments, Quizzes,Quiz_results, certificates.
-- Users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES
('Arun Kumar', 'arun@example.com'),
('Sneha Raj', 'sneha@example.com'),
('Vikram Das', 'vikram@example.com'),
('Meena Iyer', 'meena@example.com'),
('Ravi Nair', 'ravi@example.com'),
('Priya Menon', 'priya@example.com'),
('Deepak Sharma', 'deepak@example.com');

select * from users;

-- Courses
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(150),
    description TEXT
);

INSERT INTO courses (title, description) VALUES
('JavaScript Basics', 'Introduction to JavaScript programming'),
('React Essentials', 'Fundamentals of React components and hooks'),
('PostgreSQL Fundamentals', 'Working with relational databases'),
('AI in Training', 'Applying AI to enhance training workflows'),
('Communication Mastery', 'Improving clarity and tone in communication');

select * from courses;


-- Lessons
CREATE TABLE lessons (
    lesson_id SERIAL PRIMARY KEY,
    course_id INTEGER REFERENCES courses(course_id),
    title VARCHAR(150),
    content TEXT
);

INSERT INTO lessons (course_id, title, content) VALUES
(1, 'Variables & Data Types', 'Understanding JS variables'),
(1, 'Functions', 'Function syntax and use'),
(2, 'Functional Components', 'How to write functional components'),
(2, 'Hooks Overview', 'Using useState and useEffect'),
(3, 'Creating Tables', 'PostgreSQL table syntax'),
(4, 'AI Use Cases', 'Practical AI applications in learning'),
(5, 'Professional Tone', 'Writing polite and effective emails'),
(5, 'Platform Adaptation', 'Tailoring messaging for different platforms');

select * from lessons;
delete from lessons;


-- Enrollments
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    course_id INTEGER REFERENCES courses(course_id),
    enrollment_date DATE
);

INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES
(1, 1, '2025-07-01'),
(2, 2, '2025-07-03'),
(3, 3, '2025-07-05'),
(4, 4, '2025-07-06'),
(5, 5, '2025-07-07'),
(1, 3, '2025-07-09'),
(2, 4, '2025-07-10');

select * from enrollments;

-- Quizzes
CREATE TABLE quizzes (
    quiz_id SERIAL PRIMARY KEY,
    course_id INTEGER REFERENCES courses(course_id),
    title VARCHAR(100)
);

INSERT INTO quizzes (course_id, title) VALUES
(1, 'JS Quiz 1'),
(2, 'React Quiz A'),
(3, 'PostgreSQL Basics Quiz'),
(4, 'AI Quiz Intro'),
(5, 'Communication Skills Quiz');

select * from quizzes

-- Quiz Results
CREATE TABLE quiz_results (
    result_id SERIAL PRIMARY KEY,
    quiz_id INTEGER REFERENCES quizzes(quiz_id),
    user_id INTEGER REFERENCES users(user_id),
    score INTEGER,
    taken_on DATE
);

INSERT INTO quiz_results (quiz_id, user_id, score, taken_on) VALUES
(1, 1, 80, '2025-07-11'),
(2, 2, 90, '2025-07-12'),
(3, 3, 85, '2025-07-13'),
(4, 4, 88, '2025-07-14'),
(5, 5, 95, '2025-07-15'),
(3, 1, 78, '2025-07-16');

select * from quiz_results;

-- Certificates
CREATE TABLE certificates (
    certificate_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    course_id INTEGER REFERENCES courses(course_id),
    issued_on DATE
);

INSERT INTO certificates (user_id, course_id, issued_on) VALUES
(1, 1, '2025-07-20'),
(2, 2, '2025-07-20'),
(3, 3, '2025-07-21'),
(4, 4, '2025-07-22'),
(5, 5, '2025-07-23');

select * from certificates





























































































































































