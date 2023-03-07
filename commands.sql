-- Connect to a database        => psql --username=username dbname=databaseName
-- List all the database        => \l 
-- Move inside a database       => \c databaseName
-- Show tables in database      => \d & \dt
-- Viewmore details of a table  => \d tableName

CREATE DATABASE todo_database;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);



