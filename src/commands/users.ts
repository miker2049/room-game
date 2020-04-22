import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";

export async function runListUsersCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    // The first argument is always going to be us, so get the second argument instead.
    let users = await client.getJoinedRoomMembers(roomId);
    // users.forEach(user => console.dir(user));
    let text = JSON.stringify(users);


    // Now send that message as a notice
    return client.sendMessage(roomId, {
        body: text,
        msgtype: "m.notice"
    });
}
