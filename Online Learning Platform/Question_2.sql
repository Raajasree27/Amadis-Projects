--List quiz score with average quiz scores <60%;
select * from quiz_results;--quiz_id
select * from courses; --course_id
select * from quizzes;--quiz_id,course_id

update quiz_results set score=55 where user_id =4;
update quiz_results set score=47 where quiz_id =3;

select user_id,score from quiz_results group by user_id,score having avg(score)<60;

SELECT c.course_id, c.course_name, AVG(qr.score) AS average_score FROM courses c JOIN quiz q ON c.course_id = q.course_id
JOIN quiz_results qr ON q.quiz_id = qr.quiz_id GROUP BY c.course_id, c.course_name HAVING AVG(qr.score) >= 60;

select c.course_id, c.title, avg(qr.score) as Average_score from courses c join quizzes q on c.course_id =q.course_id join quiz_results qr
on q.quiz_id =qr.quiz_id group by c. course_id, c.title having avg(qr.score)<60;