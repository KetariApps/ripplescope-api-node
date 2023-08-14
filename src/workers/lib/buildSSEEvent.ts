export default function buildSSEEvent(message: string, type: string) {
  // construct the event object
  const event = {
    type,
    message,
  };
  return event;
}
