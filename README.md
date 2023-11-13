Link: https://best-movies-app.vercel.app/

# BestMoviesApp 6th Semester project
The goal of the project is to build a software for people where
they can find information about the movie industry, save their favorites movies in a list and
contribute to the movie industry through an informed opinion and rating.
The process began with the analysis part where the behavior diagrams were designed with
the scope of getting a better understanding and have a more clear idea for the design part
where the architecture and the structure of the project is made. The structure was settled as
three layer architecture where the presentation layer and a part of the business logic layer
were deployed as a web application service, the data access layer was deployed as a SQL
Database, all of them being held by the Microsoft Azure Cloud service. The connection
between the presentation and business logic layer is made with the REST Http calls while the
connection between the application tier and data tier is made through ADO.NET using
Dapper.
The result of this project is a software system which allows movie enthusiasts to find
information about movies and people from this industry. Another feature is the top rated
movies from each decade starting from the 70s. In the details of each movie can be seen the
people involved in the movie and in the details of each person can be seen a list of other
movies that this person was involved in. Furthermore, the users can create dif erent lists of
movies which they can manage and share with the others if they choose to do so.

## Requirements ##
### Functional Requirements ###
1. As a user, I want to create an account with a username and a password in order to
be registered in the system.
2. As a user, I want to use the username and the password to log in the system in
order to have access to my account functionalities.
3. As a user, I want to search for movies by name in order to find information about
that movie.
4. As a user, I want to select a movie to see more information about it and see a list of
people that were involved in that movie.
5. As a user, I want to be able to access a list of the movies that I saved as “Favorites”
in order to keep track of them and access them later much easier.
6. As a user, I want to be able to add a movie to my “Favorites” list in order to manage
my list.
7. As a user, I want to be able to remove a movie from my “Favorites” list in order to
manage my list.
8. As a user, I want to be able to search for actors in order to see more details about
them.
9. As a user, I want to be able to see recommended movies with the selected actor in
order to find out what other movies he plays in.
10. As a user, I want to be able to see a list of top rated movies for each decade as far as
starting with the 70s in order to see the masterpieces of each decade.
11. As a user, I want to be able to create my own list with the name that I want and the
option to have it public or private
12. As a user, I want to be able to add movies to the lists that I created in order to keep
track of them in my own way.
13. As a user, I want to be able to remove movies from the lists that I created in order
to manage them.
14. As a user, I want to be able to edit the name and the privacy setting of the list that I
already created in order to meet my preferences that might change over time.
15. As a user, I want to be able to see all of the lists that I created in order to have an
overview and access them.
16. As a user, I want to be able to see the lists created by other people in order to give
me inspiration and discover other movies
### Non-Functional Requirements
1. The system will be constructed as a distributed, heterogeneous with a three layer
architecture - presentation, application and persistence.
2. The system will be deployed to Microsoft Azure Cloud service.
3. The presentation and application tier will be deployed as separate web app
services in the azure environment.
4. The data tier will be deployed as a SQL database in the azure environment.
5. The presentation tier will be built using TypeScript and React with MaterialUI.
6. The application tier will be built using C# as an ASP .NET Core Web API.
7. The communication between the presentation tier and application tier will be done
with REST architectural style using HTTP requests.
## Architecture ##
![image](https://user-images.githubusercontent.com/51113635/213472972-b749218a-f320-4c74-a2d0-a930b8c1c91a.png)




