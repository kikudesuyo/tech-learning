CREATE TABLE Shohin (
    id BIGINT,
    shohin_mei varchar,
    hanbai_tanka varchar,
    shiire_tanka varchar
    torokubi DATE,
)

-- 2-1
SELECT hohin_mei, torokubi
    FROM Shohin 
WHERE torokubi > DATE(2009, 4, 28);

-- 2-2

