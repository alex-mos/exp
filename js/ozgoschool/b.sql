-- В базе данных имеется таблица с товарами goods (id INTEGER, name TEXT),
-- таблица с тегами tags (id INTEGER, name TEXT)
-- таблица связки товаров и тегов tags_goods (tag_id INTEGER, goods_id INTEGER, UNIQUE (tag_id, goods_id)).
-- Выведите id и названия всех товаров, которые имеют все возможные теги в этой базе.

create table goods (id INTEGER, name TEXT);
create table tags (id INTEGER, name TEXT);
create table tags_goods (tag_id INTEGER, goods_id INTEGER, UNIQUE(tag_id, goods_id));

insert into goods (id, name) values (10, 'лыжи');
insert into goods (id, name) values (20, 'vr-шлем');
insert into goods (id, name) values (30, 'нинтендо свич');

insert into tags (id, name) values (100, 'б/у');
insert into tags (id, name) values (200, 'новый');
insert into tags (id, name) values (300, 'чорный');
insert into tags (id, name) values (400, 'белый');

insert into tags_goods (goods_id, tag_id) values (10, 100);
insert into tags_goods (goods_id, tag_id) values (10, 400);
insert into tags_goods (goods_id, tag_id) values (10, 300);
insert into tags_goods (goods_id, tag_id) values (10, 200);
insert into tags_goods (goods_id, tag_id) values (20, 200);
insert into tags_goods (goods_id, tag_id) values (20, 400);
insert into tags_goods (goods_id, tag_id) values (30, 100);
insert into tags_goods (goods_id, tag_id) values (30, 200);
insert into tags_goods (goods_id, tag_id) values (30, 300);
insert into tags_goods (goods_id, tag_id) values (30, 400);

select * from goods join tags

select
  goods_id,
from
  tags_goods
group by
  goods_id
having 
  count(goods_id) = count_tags
;

select id, name, (select goods_id from tags_goods group by goods_id having count(goods_id) = (select count(tags.id) as count_tags from tags) as target_tags from goods;
join tags_goods group by goods_id having count(goods_id) = (select count(tags.id) as count_tags from tags));


select
select goods_id from tags_goods group by goods_id having count(goods_id) = (select count(tags.id) as count_tags from tags);
 as target_tags;

select count(tags.id) as count_tags from tags
and (

)
;