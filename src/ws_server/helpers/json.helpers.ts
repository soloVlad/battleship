export const parseMessage = (message: string) => {
  const messageObj = JSON.parse(message);

  try {
    messageObj.data = JSON.parse((messageObj?.data ?? '') as string);
  } catch { }

  return messageObj;
};
