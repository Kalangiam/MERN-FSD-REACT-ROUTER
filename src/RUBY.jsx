import React from 'react'

function RUBY() {
    return (
        <div className='container'>
            <h1>Ruby on Rails</h1>
            <ul>
                <li>Ruby on Rails, often simply referred to as Rails, is a popular open-source web application framework written in the Ruby programming language. It follows the Model-View-Controller (MVC) architecture pattern, which separates the application logic into three interconnected components: models, views, and controllers. Here's an overview of Ruby on Rails and its key features:

                    Convention over Configuration (CoC): Rails follows the principle of "convention over configuration," which means that it makes assumptions about how things should be done, reducing the need for developers to write configuration code. This convention-based approach allows developers to focus more on building application features rather than configuring the framework.</li>
                <li>Don't Repeat Yourself (DRY): Rails promotes the DRY principle, which encourages developers to avoid duplicating code by keeping code modular and reusable. Rails provides features such as code generators, partials, and helper methods to help developers write concise and maintainable code.

                    Active Record: Rails includes an Object-Relational Mapping (ORM) framework called Active Record, which simplifies database interactions by mapping database tables to Ruby objects. Active Record provides methods for querying, updating, and manipulating database records, making it easy to work with relational databases in Rails applications.

                    Scaffolding: Rails includes a built-in scaffolding feature that generates boilerplate code for creating CRUD (Create, Read, Update, Delete) operations for database-backed resources. Scaffolding allows developers to quickly prototype application features and generate basic CRUD interfaces without writing code from scratch.</li>
                <li>Asset Pipeline: Rails includes an asset pipeline that automates the management and optimization of JavaScript, CSS, and image assets in web applications. The asset pipeline processes and compresses assets, concatenates files, and adds cache-busting fingerprints to improve application performance and reduce load times.

                    Security Features: Rails includes built-in security features to protect against common web application vulnerabilities such as Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL injection attacks. Rails provides features such as parameter sanitization, CSRF protection tokens, and secure session management to help developers build secure web applications.

                    Testing Support: Rails includes built-in support for writing automated tests, including unit tests, functional tests, and integration tests. Rails encourages test-driven development (TDD) and provides testing frameworks such as MiniTest and RSpec, making it easy to write and maintain test suites for Rails applications.</li>
            </ul>
        </div>
    )
}

export default RUBY