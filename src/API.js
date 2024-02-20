export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhZDA4NjNjOC01ZWMyLTQxNGMtODAwNC1mYTM4N2MyZDYzMmQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNzQzMjk1MiwiZXhwIjoxODY1MjIwOTUyfQ.3dZjb2awmPNajgyWTHrX-5gJ-ZMY8AK2HHQ1S7IEsYA";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
