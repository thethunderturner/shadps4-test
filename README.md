# shadPS4 website

The shadPS4 website is built with [Astro](https://astro.build). It is a static site generator that compiles your code into HTML files making it blazing fast. Astro also supports SSR (Server Side Rendering) out of the box. This means that you can have dynamic components using React on an otherwise static page of HTML.

To get started, clone the project using

```sh
git clone git@github.com:shadps4-compatibility/shadps4site.git
```

## 🚀 Project Structure

Inside your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── content/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   ├── layouts/
│       └── ...
└── package.json
```

- The `public/` folder contains static assets like images and favicons.
- The `src/` folder contains your project code.
    - The `assets/` folder contains your project assets like images.
    - The `components/` folder contains your React and Astro components, which are usually small reusable pieces of
      code.
    - The `content/` folder contains your blog posts, which are written in Markdown and rendered to HTML.
    - The `pages/` folder contains your project pages, which are written in Astro components.
    - The `layouts/` folder contains your page layouts, which are used to wrap your pages.

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Database

The website uses PHP to make SQL queries to the database in order to get the compatibility data. These are the steps needed to set up and populate the database:

1. First make sure MariaDB/MySQL is installed on your machine.
2. `sudo mariadb`
3. Run the following commands:
```bash
CREATE DATABASE shadps4_site;
CREATE USER 'shadps4_site'@'localhost' IDENTIFIED BY 'shadps4site!@#';
GRANT ALL PRIVILEGES ON shadps4_site.* TO 'shadps4_site'@'localhost';
FLUSH PRIVILEGES
USE shadps4_site;
CREATE TABLE IF NOT EXISTS `compatibilitylist` (
  `id` int(11) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdDate` bigint(20) DEFAULT NULL,
  `updatedDate` bigint(20) DEFAULT NULL,
  `version` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `os` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS `compatibilitydb` (
  `codedb` varchar(20) NOT NULL,
  `titledb` varchar(255) DEFAULT NULL,
  `parentalLevel` int(11) DEFAULT NULL,
  `contentId` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `psVr` int(11) DEFAULT NULL,
  `neoEnable` int(11) DEFAULT NULL,
  PRIMARY KEY (`codedb`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS `errlist` (
  `id` int(11) NOT NULL,
  `reason` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```
