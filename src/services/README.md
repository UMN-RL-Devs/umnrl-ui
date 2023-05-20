# services Folder

Whenever you need to handle a lot of logic that is unrelated to a component, you place it in a TypeScript file in the `services` directory. These files should follow the convention of whatever they do followed by `Service.ts`.

This project will have a feature that uses the Twitch webhook to signal to a React component that a club Twitch channel is live, so we will very likely have a file named `twitchService.ts`.

All files in this directory will have ZERO React programming. Think of this folder as more of a `utils` folder where you can store commonly used functions throughout your program.
