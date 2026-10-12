-- テーブル定義
CREATE TABLE Jyushoroku (
    id BIGINT PRIMARY KEY,
    toroku_bango int,
    namae varchar,
    jyusho varchar,
    tel_no character(10),
    mail_address character(20)
)

-- カラム追加
ALTER TABLE Jyushoroku ADD COLUMN yubin_bango character(8) not NUll;

-- テーブルの削除
DROP TABLE Jyushoroku;

-- テーブルの復活
-- 一度削除したらrevertすることは出来ない