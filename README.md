<p align="center">
    <h1 align="center"><b>discord-shields</b></h1>
    <p align="center">
        Expose your Discord presence in Shields.io using Lanyard.
        <br />
        <a href="https://aidak.tk"><strong>aidak.tk »</strong></a>
    </p>
</p>

<p align="center">
    <a href="https://aidak.tk">
        <img src="https://img.shields.io/badge/Aidak-Official%20Product-8877ff" />
    </a>
    <a href="https://discordredirect.discordsafe.com/users/152569284390944768">
        <img src="https://img.shields.io/badge/contact-me?logo=discord&logoColor=white&color=5865F2">
    </a>
    <a href="https://twitter.com/realaidak">
        <img src="https://img.shields.io/badge/Twitter-00acee?logo=twitter&logoColor=white" />
    </a>
    <img src="https://img.shields.io/static/v1?label=License&message=Apache%202.0&color=000" />
    <img src="https://img.shields.io/static/v1?label=Stage&message=Stable 1.0&color=2BB4AB" />
    <br />
</p>

# Usage

```
https://img.shields.io/endpoint?url=https://discord-shields.aidak.repl.co/status/:id
```

That's it.

# What's Lanyard?
Lanyard is an API that exports your live Discord presence to an endpoint.

Due the ease of use of the project, we have decided to make this project wrapping on Lanyard.

**First of everything, you should follow instructions [here](https://github.com/Phineas/lanyard#get-started-in--10-seconds).**

# Available endpoints

**WARNING: Everything is based on your Discord presence so make sure you're displaying your activities correctly.**

`/status/:id` -> Displays your Discord status, either offline or online.

`/playing/:id` -> Displays the first game that is not VSCode.

`/coding/:id` -> Displays what you're coding in Visual Studio Code.

`/spotify/:id` -> Displays what you're listening to at Spotify.