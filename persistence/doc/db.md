CREATE TABLE stream (
  event_id char(21) NOT NULL CONSTRAINT stream_pk PRIMARY KEY,
  stream_id char(21) NOT NULL,
  stream_type varchar(128) NOT NULL,
  event_number int NOT NULL CHECK (event_number > 0),
  event_type varchar(128) NOT NULL,
  corelation_id INT NOT NULL,
  timestamp timestamp NOT NULL,
  data JSON DEFAULT NULL);
