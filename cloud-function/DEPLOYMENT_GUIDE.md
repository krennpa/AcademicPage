# Google Cloud Function Deployment Guide

## 📧 Contact Form Email Service Setup

This guide will help you deploy a Google Cloud Function that sends emails from your contact form to `p.krennmair@gmail.com`.

## 🚀 Quick Setup Steps

### Step 1: Enable Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **App passwords**
4. Generate a new app password for "Mail"
5. **Save this password** - you'll need it for the deployment

### Step 2: Deploy the Cloud Function

Open your terminal in the `cloud-function` directory and run:

```bash
# Navigate to the cloud function directory
cd cloud-function

# Install dependencies
npm install

# Deploy to Google Cloud (replace with your project ID)
gcloud functions deploy sendContactEmail \
  --runtime nodejs18 \
  --trigger-http \
  --allow-unauthenticated \
  --set-env-vars GMAIL_USER=p.krennmair@gmail.com,GMAIL_APP_PASSWORD=your-app-password-here \
  --project your-gcp-project-id
```

### Step 3: Get Your Function URL

After deployment, you'll get a URL like:
```
https://us-central1-your-project.cloudfunctions.net/sendContactEmail
```

### Step 4: Update Frontend

Replace `YOUR_CLOUD_FUNCTION_URL` in your Contact.tsx with the actual URL from Step 3.

## 🔧 Alternative: Deploy via GCP Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **Cloud Functions**
3. Click **Create Function**
4. Configure:
   - **Function name**: `sendContactEmail`
   - **Region**: Choose your preferred region
   - **Trigger**: HTTP
   - **Allow unauthenticated invocations**: ✅ Checked
5. Click **Next**
6. **Runtime**: Node.js 18
7. **Entry point**: `sendContactEmail`
8. Copy the code from `index.js` and `package.json`
9. Set environment variables:
   - `GMAIL_USER`: `p.krennmair@gmail.com`
   - `GMAIL_APP_PASSWORD`: Your generated app password
10. Click **Deploy**

## 🧪 Test Your Function

You can test the function directly:

```bash
curl -X POST https://your-function-url \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message from the contact form."
  }'
```

## 📋 Environment Variables Needed

- `GMAIL_USER`: `p.krennmair@gmail.com`
- `GMAIL_APP_PASSWORD`: Your Gmail app password (16-character code)

## 🔒 Security Features

✅ CORS enabled for your website  
✅ Input validation  
✅ Professional email formatting  
✅ Reply-to header set to sender's email  
✅ Error handling and logging  

## 💡 Benefits of This Solution

- **Serverless**: Only pay when emails are sent
- **Secure**: Uses Gmail's secure SMTP
- **Professional**: Beautiful HTML email formatting
- **Reliable**: Google Cloud's infrastructure
- **Scalable**: Handles high volume automatically

## 🆘 Troubleshooting

**"Authentication failed"**: Check your Gmail app password  
**"Function not found"**: Verify the function name and URL  
**"CORS error"**: Function includes CORS headers, check your domain  
**"Missing fields"**: Ensure all form fields are filled  

Your contact form will now send professional emails directly to `p.krennmair@gmail.com`!
