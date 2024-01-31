const url = 'v1/cleaning-sessions'
const roomSize = [5, 5]

function createJsonPayload () {
    return { roomSize, coords, patches, instructions }
}

module.exports = {createJsonPayload, roomSize, url};
