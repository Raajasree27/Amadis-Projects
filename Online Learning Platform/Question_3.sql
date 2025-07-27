--find users who have passed more than 3 courses
select * from users;--user_id,name
select * from courses;--course_id,title
-- select * from quiz_results;
select * from certificates ;--user_id,issues_on

INSERT INTO certificates (user_id, course_id, issued_on) VALUES
(3, 1, '2025-07-21'),
(3, 2, '2025-07-22'),
(3, 3, '2025-07-23'),
(3, 4, '2025-07-24'),
(3, 5, '2025-07-25'),
(4, 2, '2025-07-21'),
(4, 3, '2025-07-22'),
(4, 4, '2025-07-23'),
(5, 1, '2025-07-21'),
(5, 2, '2025-07-22');

select cer.user_id,count(c.course_id) from courses c join certificates cer on c.course_id=cer.course_id group by cer.user_id;

select u.user_id,u.name,count(c.course_id) from users u join certificates cer on u.user_id=cer.user_id 
join courses c on c.course_id=cer.course_id group by u.user_id,u.name having count(c.course_id)>3;


















