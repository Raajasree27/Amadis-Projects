--drop off rates: users who have enrolled but not finished more than 2 courses
select * from users;--user_id, name
select * from certificates;--user_id, course_id
select * from enrollments;--user_id, course_id

insert into certificates


select e.user_id,u.name,count(cer.course_id) from enrollments e left join certificates cer on cer.user_id=e.user_id
join users u on u.user_id=e.user_id  group by e.user_id,u.name having count(cer.course_id)<2;