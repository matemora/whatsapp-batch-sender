# Simple WhatsApp Batch Message Sender

Use this project if you need to send batch messages to contacts, without creating Groups or Lists.

1. Clone the project
2. Install dependencies
3. Prepare a .csv file with 2 columns: name and number (which is the phone number)
    3.1. Phone number may have special characters like `+`, `-`, `(` or `)`. If you want, check the regex expression the extracts only the number from the text.
4. Adjust the message you want to send
5. Run the project with `npm start`
6. Connect your whatsapp using the generated qr code
7. Be happy!

If you want, the lib has other functionalities, like listening for responses to which you can then perform logic and respond according to you requirements.

Remeber to invalidate the session on your whatsapp after you are done using it. Don't leave open connections to your whatsapp especially on unsafe environments.
