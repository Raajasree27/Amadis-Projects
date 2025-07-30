select * from users;
select * from lessons;
select * from certificates;
select * from courses;


select course_id , count(*) from lessons group by course_id order by course_id asc;
create table lesson_progress(user_id int references users(user_id),lesson_id int references lessons(lesson_id),completed_on date);
INSERT INTO lesson_progress (user_id, lesson_id, completed_on) VALUES
(1, 17, '2025-07-11'),
(1, 18, '2025-07-11'),
(2, 19, '2025-07-12'),
(2, 20, '2025-07-13')
select * from lesson_progress;

select course_id, count(*)from lessons group by course_id;

select lp.user_id,l.course_id,count(*) as completed_lessons from lesson_progress lp join lessons l on lp.lesson_id=l.lesson_id group by lp.user_id,l.course_id;

select c.user_id,c.course_id from completed c join count_lesson cl on c.course_id=cl.course_id where c.completed_lessons=cl.total_lessons;

with count_lesson as(select course_id , count(*) as total_lessons from lessons group by course_id),completed as
(select lp.user_id,l.course_id,count(*) as completed_lessons from lesson_progress lp join lessons l on lp.lesson_id=l.lesson_id group by lp.user_id,l.course_id)
,fully_completed as (select c.user_id,c.course_id from completed c join count_lesson cl on c.course_id=cl.course_id where c.completed_lessons=cl.total_lessons
) select u.user_id,u.name,f.course_id from fully_completed f join users u on f.user_id=u.user_id 
left join certificates cert on cert.user_id=f.user_id and cert.course_id=f.course_id  where cert.certificate_id is null;

SELECT * 
FROM certificates 
WHERE user_id IN (1, 2) AND course_id IN (1, 2);

DELETE FROM certificates WHERE user_id = 1 AND course_id = 1;

--Testing
insert into lesson_progress(user_id,lesson_id,completed_on)values(3,19,'2025-07-20'),(3,20,'2025-07-20')
insert into lesson_progress(user_id,lesson_id,completed_on)values(4,21,'2025-07-20');

delete from certificates where user_id in (3,4)and course_id in(2,3);

























