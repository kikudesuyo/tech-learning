# ゼロからはじめるデータベース

postgresqlを利用

.sqlファイルから実行する

DB作成

```bash
psql -U postgres -d postgres -f [SQL_FILE_NAME]
```

`psql` : PostgreSQLに接続するためのコマンド
`-U postgres`: `postgres` ユーザーとして接続する(U=User)
`-d postgres`: `postgres`データベースに接続する(-d=database)
`-f [SQL_FILE_PATH]`: SQLファイルを実行(-f=file)

SQL文実行

```bash
psql -d [DB_NAME] -f [SQL_FILE_PATH]
```

テーブル名参照

```SQL
\d [TABLE_NAME]
```
