import ClassRoom from './0-classroom.js';

export default function initializeRooms () {
  const rooms = [];
  for (const k of [19, 20, 34]) {
    rooms.push(new ClassRoom(k));
  }
  return rooms;
}
