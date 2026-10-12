SELECT shohin_id, shohin_mei, shiire_tanka From Shohin;

-- 列名を指定する場合はASを使用
SELECT 
    shohin_id as id
    shohin_mei as product_name
    shiire_tanka as purchase_value
From Shohin;


-- 重複を省いて取得する場合
SELECT DISTINCT shohin_bunrui FROM Shohin;

-- 条件を絞って取得

SELECT shohin_mei, shohin_bunrui
    FROM Shohin
WHERE shohin_bunrui = "衣服";

-- 検索条件の列を出力しないことも可能

SELECT shohin_mei 
    From Shohin
WHERE shohin_bunrui = "衣服";


-- 比較演算子
-- ノットイコールは<>と表記。ただしposgresは!=が使用可能