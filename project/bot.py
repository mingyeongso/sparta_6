import slack
slack_token = 'xoxb-740521168965-864488231975-OeUuOr3fWd197dUhXRyuqN73'
client = slack.WebClient(token=slack_token)
client.chat_postMessage(channel="#general", text="Hello world!")