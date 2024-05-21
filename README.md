# Rentaly Headless WordPress Demo

Welcome to the **Rentaly Headless WordPress Demo Project**! This repo features a **HTML template** for a fake car rental website called **Rentaly**. We use **OPS** to host WordPress locally. For more information on OPS, visit [OPS GitHub](https://github.com/imarc/ops/).

---

## 🚀 Quick Start

### Backend Setup

1. **Install OPS**
2. **Clone this repo** and place it in your `~/Sites` folder
3. **Copy the example environment file**:
   ```sh
   cp .env.example .env
   ```
4. **Navigate to the WordPress directory** and copy the local environment file:
   ```sh
   cd wordpress
   cp .env.local.example .env.local
   ```
5. **Create an `auth.json` file** under `/wordpress` and include your ACF license details:
   ```json
   {
       "http-basic": {
           "connect.advancedcustomfields.com": {
               "username": "{find on keeper}",
               "password": "{find on keeper}"
           }
       }
   }
   ```
6. **Install dependencies**:
   ```sh
   npm install
   composer install
   ```

You now have a blank WordPress site! To update the site from Pantheon (production), install **Terminus** and authenticate your machine: [Terminus Installation Guide](https://docs.pantheon.io/terminus/install).

Once authenticated, run:
```sh
ops sync-db
```
You can now sign in using the admin account (details in Keeper).

---

### Frontend Setup (Faust/NextJS)

1. **Navigate to the Faust directory**:
   ```sh
   cd faust
   ```
2. **Copy the example environment file**:
   ```sh
   cp .env.example .env
   ```
3. **Configure environment variables**:
   - `NEXT_PUBLIC_WORDPRESS_URL=`: Enter the WordPress instance URL. For local, use `headless-wp.imarc.io`
   - `FAUST_SECRET_KEY=`: Find the key in WordPress under **Settings -> Faust -> Secret Key** (via the Faust plugin)
4. **Install dependencies**:
   ```sh
   npm install
   ```
5. **Start the development server**:
   ```sh
   npm run dev
   ```

You should now be able to see the headless WordPress site!

---

Happy coding! 🚗💨

Feel free to reach out with any questions or issues. Enjoy building with Rentaly!