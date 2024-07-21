# Spendwise

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/2212vishal/firebase_basics.git
   ```

2. **Configure Firebase**:
   - Obtain the `your-service-account-file.json` file from your Firebase account.
   - Upload this file's path to the `firebaseAdmin.js` file in the `serviceAccount` place.
   - Also, upload the Realtime Database URL to this file.

3. **Run the Project**:
   ```bash
   npm run dev
   ```

## API Routes

### SMS Routes

1. **Create SMS Entry**
   - **Route:** `POST /create`
   - **Description:** Create a new SMS entry.
   - **Request Body:**
     - `sms` (Object): The SMS data to be created.
   - **Example Usage (Postman):**
     - Set request type to POST
     - Set URL to `http://localhost:4000/create`
     - Go to Body tab, select raw, and enter the SMS data in JSON format.
     - Click Send

2. **Get All SMS Entries**
   - **Route:** `GET /all`
   - **Description:** Retrieve all SMS entries.
   - **Example Usage (Postman):**
     - Set request type to GET
     - Set URL to `http://localhost:4000/all`
     - Click Send

3. **Format and Save SMS**
   - **Route:** `POST /format`
   - **Description:** Format and save the SMS data.
   - **Request Body:**
     - `sms` (Object): The SMS data to be formatted and saved.
   - **Example Usage (Postman):**
     - Set request type to POST
     - Set URL to `http://localhost:4000/format`
     - Go to Body tab, select raw, and enter the SMS data in JSON format.
     - Click Send

4. **Get Total SMS Amount**
   - **Route:** `GET /total-amount`
   - **Description:** Retrieve the total amount of SMS transactions.
   - **Example Usage (Postman):**
     - Set request type to GET
     - Set URL to `http://localhost:4000/total-amount`
     - Click Send

---

VISHAL  
vishal20120073623@gmail.com / vishal_ug20@nsut.ac.in
