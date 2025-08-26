export const CLOCK_CONSTANTS = {
  //numbers
  CENTER_OFFSET: 50, //center position for clock number
  RADIUS: 45, //distance of numbers for center
  DEGREES_PER_HOUR: 30, //degrees moved by the hour hand per hour
  DEG_TO_RAD: Math.PI / 180, //converts degrees to radians

  //Hands
  DEGREES_PER_MINUTE_SECOND: 6, //degrees moved per minute or second
  MINUTES_ADJUSTMENT: 0.5, //hour hand adjusment per minute
  SECOND_ADJUSMENT: 0.1, //Minute hand adjustment per second
  OFFSET_ROTATION: 180, //Rotation offset per allignment
};
