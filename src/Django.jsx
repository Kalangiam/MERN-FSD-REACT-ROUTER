import React from 'react'

function Django() {
    return (
        <div className='container'>
            <h1>Python Django</h1>
            <ul>
                <li>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the Model-View-Controller (MVC) architectural pattern, although it is sometimes referred to as a Model-View-Template (MVT) framework because of its slightly different implementation.

                    Here's an overview of Python Django and its key features:

                    Object-Relational Mapping (ORM): Django includes a powerful ORM that allows developers to interact with the database using Python objects. The ORM abstracts away the details of database management and provides an intuitive API for performing database operations, such as querying, filtering, and updating records.

                    Admin Interface: Django includes a built-in admin interface that automatically generates a web-based administrative interface for managing application data. Developers can define models and register them with the admin interface to enable CRUD (Create, Read, Update, Delete) operations on database records without writing any additional code.

                    URL Routing: Django uses a URL routing system to map URLs to view functions or classes. Developers can define URL patterns using regular expressions or simple strings, making it easy to create clean and SEO-friendly URLs for different parts of the application.

                    Template Engine: Django includes a template engine that allows developers to create HTML templates with Python-like syntax. Templates can include dynamic content, template inheritance, and template tags for looping, conditionals, and other logic. The template engine promotes code reuse and separation of concerns between presentation and business logic.

                    Form Handling: Django provides a form handling library that simplifies the process of working with HTML forms. Developers can define forms using Python classes and then render them in templates or process form submissions in views. The form handling library includes built-in validation, error handling, and CSRF (Cross-Site Request Forgery) protection.

                    Authentication and Authorization: Django includes built-in support for user authentication and authorization. Developers can easily integrate authentication mechanisms such as login, logout, and password reset into their applications. Django also provides a flexible permissions system for controlling access to views and resources based on user roles and permissions.

                    Security Features: Django includes several security features to protect against common web application vulnerabilities, such as SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF) attacks. Django provides features such as parameterized queries, automatic HTML escaping, and built-in CSRF protection to help developers build secure web applications.

                    Testing Support: Django includes built-in support for writing automated tests to ensure the correctness and reliability of applications. Developers can write unit tests, integration tests, and functional tests using Django's testing framework, which provides tools for simulating HTTP requests, mocking database interactions, and asserting expected behaviors.</li>
            </ul>
        </div>
    )
}

export default Django