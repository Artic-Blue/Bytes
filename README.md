# Project Title

Best Eats

## Overview

* Best Eats is a grocery and lifestyle retail web-portal. It allows customers not only to purchase home-delivered individual food items and meal kits, but also to learn about the farmers who grow the food. Additionally, Best Eats allows customers to journal and track their daily feelings and experiences with food. According to the company, "Best Eats is a one-stop shop for the best healthy food and life advice, delivered right to your door."


## Description

* The site allows users to view the following sections:

1. A Home page.
This landing page greets the users, and allows them to navigate to other pages on the site. A Navigation Bar, which remains visible on this page and all other pages, also allows users to move between pages.

2. A Shop page.
Here users can navigate the site's inventory of food products. They can click on small icons for individual food items or meal kits, and then view detailed information including prices, ingredients, preparation instructions, and stories of the farmers. After searching through the items, users can select the ones to add to their shopping carts.

3. A Farmers page.
Here users can scroll through photos and biographies to learn more about the farmers who provide food to Best Eats.

4. A Lifestyle page.
Here users can maintain running daily journals about their food and eating experiences. The page allows them to input individual journal entries and view running histories of previous entries.

5. A Cart page.
Here users view items they've placed in their carts.

6. A Register, Login, and Logout page
Here new users can create accounts, returning users can log in to their accounts, and finished users can log out of their accounts.

## Getting Started

### Dependencies

* The 'package.json' file contains a complete list of dependencies.

### Installing

* The 'package.json' file contains a complete list of required scripts.
* Use 'npm install' to install the dependencies.

### Executing program

* Use the ".env_sample" file as a template for creating an ".env" file, containing information about your environment.
* Use 'psql -d bytes -f db/Schema.sql' to create the database.
* Use 'psql -d bytes -f db/CSVImport.sql' to populate the database with product information.
* Use 'npm run build' to start the Webpack bundler.
* Use 'npm run dev' to start a local server.
* View the site at 'http://localhost:3000'.

## Authors

Artic Blue Ocean Group - HRSF138
David Deaton
Norman Fung
Joseph Kim
Noah Lehman
Andrew Treptow
Jessica Yang

December 2021

## Version History

* 0.1
    * Initial Release

## Acknowledgments

Hack Reactor staff, our peers, and teammates provided terrific support for completing this project.
*
