INSERT INTO data_group(data_group_id, data_group_key, data_group_name, data_group_path, data_group_target, sharing, user_id,
                       ancestor, parent, "depth", view_order, children, basic, available, tiling, data_count, "location", altitude, location_update_type,
                       metainfo)
VALUES
(10000,'shcampus','시흥캠퍼스','infra/data/shcampus/','admin','public','admin',10000,0,1,2,0,false,true,false,65,'SRID=4326;POINT (126.72030992848104 37.369568083064294)'::geometry,2000.0000000,'user','{"isPhysical": false}'),
(10001,'constuctorLevel','건설공정','infra/data/constuctorLevel/','admin','public','admin',10001,0,1,3,0,false,true,false,16,'SRID=4326;POINT (126.7227737863392 37.36886119700789)'::geometry,300.0000000,'user','{"isPhysical": false}');

INSERT INTO data_info(data_id, data_group_id, data_relation_id, converter_job_id, data_key, data_name, data_type, sharing, user_id, update_user_id,
                      mapping_type, "location", altitude, heading, pitch, roll, children_ancestor, children_parent, children_depth, children_view_order,
                      metainfo, status, assemble, "label", label_template, attribute_exist, object_attribute_exist, description, update_date, insert_date)
VALUES
(200000,10000,NULL,NULL,'BD_001','BD_001',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721229 37.364494)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,1,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200001,10000,NULL,NULL,'BD_002','BD_002',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.723208 37.365881)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,2,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200002,10000,NULL,NULL,'BD_003','BD_003',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.723597 37.366321)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,3,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200003,10000,NULL,NULL,'BD_004','BD_004',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.723399 37.366928)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,4,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200004,10000,NULL,NULL,'BD_005','BD_005',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.715591 37.368093)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,5,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200005,10000,NULL,NULL,'BD_006','BD_006',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.714453 37.366883)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,6,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200006,10000,NULL,NULL,'BD_007','BD_007',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.715464 37.36624)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,7,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200007,10000,NULL,NULL,'BD_008','BD_008',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.717358 37.365171)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,8,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200008,10000,NULL,NULL,'BD_009','BD_009',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.716069 37.365992)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,9,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200009,10000,NULL,NULL,'BD_010','BD_010',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.716769 37.365262)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,10,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200010,10000,NULL,NULL,'BD_011','BD_011',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.716157 37.364825)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,11,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200011,10000,NULL,NULL,'BD_012','BD_012',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.715272 37.365414)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,12,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200012,10000,NULL,NULL,'BD_013','BD_013',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.717217 37.367897)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,13,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200013,10000,NULL,NULL,'BD_014','BD_014',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720128 37.365573)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,14,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200014,10000,NULL,NULL,'BD_015','BD_015',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719631 37.365033)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,15,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200015,10000,NULL,NULL,'BD_016','BD_016',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719044 37.365295)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,16,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200016,10000,NULL,NULL,'BD_017','BD_017',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.718673 37.365829)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,17,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200017,10000,NULL,NULL,'BD_018','BD_018',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.717389 37.36624)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,18,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200018,10000,NULL,NULL,'BD_019','BD_019',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.717784 37.366404)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,19,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200019,10000,NULL,NULL,'BD_020','BD_020',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.716473 37.367013)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,20,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200020,10000,NULL,NULL,'BD_021','BD_021',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.717331 37.367199)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,21,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200021,10000,NULL,NULL,'BD_022','BD_022',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719378 37.366379)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,22,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200022,10000,NULL,NULL,'BD_023','BD_023',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.718254 37.368841)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,23,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200023,10000,NULL,NULL,'BD_024','BD_024',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.717731 37.369793)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,24,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200024,10000,NULL,NULL,'BD_025','BD_025',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719831 37.367955)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,25,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200025,10000,NULL,NULL,'BD_026','BD_026',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720879 37.367349)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,26,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200026,10000,NULL,NULL,'BD_027','BD_027',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720981 37.368643)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,27,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200027,10000,NULL,NULL,'BD_028','BD_028',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721422 37.368281)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,28,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200028,10000,NULL,NULL,'BD_029','BD_029',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720466 37.368234)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,29,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200029,10000,NULL,NULL,'BD_030','BD_030',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.718945 37.36908)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,30,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200030,10000,NULL,NULL,'BD_031','BD_031',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.718457 37.369392)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,31,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200031,10000,NULL,NULL,'BD_032','BD_032',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721957 37.368117)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,32,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200032,10000,NULL,NULL,'BD_033','BD_033',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.722238 37.367772)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,33,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200033,10000,NULL,NULL,'BD_034','BD_034',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720547 37.368919)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,34,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200034,10000,NULL,NULL,'BD_035','BD_035',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721731 37.367467)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,35,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200035,10000,NULL,NULL,'BD_036','BD_036',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721339 37.367739)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,36,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200036,10000,NULL,NULL,'BD_037','BD_037',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720886 37.368016)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,37,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200037,10000,NULL,NULL,'BD_038','BD_038',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719311 37.369763)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,38,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200038,10000,NULL,NULL,'BD_039','BD_039',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.718747 37.37012)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,39,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200039,10000,NULL,NULL,'BD_040','BD_040',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.725124 37.366151)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,40,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200040,10000,NULL,NULL,'BD_041','BD_041',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.717334 37.364346)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,41,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200041,10000,NULL,NULL,'BD_042','BD_042',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.718034 37.363842)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,42,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200042,10000,NULL,NULL,'BD_043','BD_043',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72181 37.362055)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,43,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200043,10000,NULL,NULL,'BD_044','BD_044',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721205 37.361749)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,44,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200044,10000,NULL,NULL,'BD_045','BD_045',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721544 37.362544)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,45,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200045,10000,NULL,NULL,'BD_046','BD_046',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720684 37.362043)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,46,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200046,10000,NULL,NULL,'BD_047','BD_047',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720668 37.362962)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,47,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200047,10000,NULL,NULL,'BD_048','BD_048',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719836 37.363466)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,48,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200048,10000,NULL,NULL,'BD_049','BD_049',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.71932 37.362908)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,49,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200049,10000,NULL,NULL,'BD_050','BD_050',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720078 37.362454)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,50,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200050,10000,NULL,NULL,'BD_051','BD_051',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.724306 37.363978)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,51,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200051,10000,NULL,NULL,'BD_052','BD_052',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.725154 37.363925)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,52,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200052,10000,NULL,NULL,'BD_053','BD_053',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.725658 37.365244)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,53,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200053,10000,NULL,NULL,'BD_054','BD_054',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.725375 37.364733)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,54,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200054,10000,NULL,NULL,'BD_055','BD_055',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.726347 37.364739)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,55,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200055,10000,NULL,NULL,'BD_056','BD_056',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72209 37.362305)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,56,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200056,10000,NULL,NULL,'BD_057','BD_057',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.725831 37.364303)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,57,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200057,10000,NULL,NULL,'ETC_01','ETC_01',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720158 37.367015)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,58,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200058,10000,NULL,NULL,'ETC_02','ETC_02',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72141 37.366473)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,59,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200059,10000,NULL,NULL,'ETC_03','ETC_03',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.721307 37.36599)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,60,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200060,10000,NULL,NULL,'ETC_04','ETC_04',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.720492 37.36347)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,61,'{"group": 5, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200061,10000,NULL,NULL,'ETC_05','ETC_05',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719749 37.36726)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,62,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200062,10000,NULL,NULL,'ETC_06','ETC_06',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.719335 37.36751)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,63,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200063,10000,NULL,NULL,'ETC_07','ETC_07',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.71899 37.367715)'::geometry,3.7500000,0.00000,0.00000,0.00000,NULL,NULL,1,64,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "relativeToGround"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:00.890493+09'),
(200065,10001,NULL,NULL,'KSJ_100_0_0','KSJ_100_0_0',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,1,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200066,10001,NULL,NULL,'KSJ_100_0_1','KSJ_100_0_1',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,2,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200067,10001,NULL,NULL,'KSJ_100_0_2','KSJ_100_0_2',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,3,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200068,10001,NULL,NULL,'KSJ_100_0_3','KSJ_100_0_3',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,4,'{"group": 0, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200069,10001,NULL,NULL,'KSJ_100_1_0','KSJ_100_1_0',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,5,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200070,10001,NULL,NULL,'KSJ_100_1_1','KSJ_100_1_1',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,6,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200071,10001,NULL,NULL,'KSJ_100_1_2','KSJ_100_1_2',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,7,'{"group": 1, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200072,10001,NULL,NULL,'KSJ_100_1_3','KSJ_100_1_3',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,8,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200073,10001,NULL,NULL,'KSJ_100_1_4','KSJ_100_1_4',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,9,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200074,10001,NULL,NULL,'KSJ_100_2_0','KSJ_100_2_0',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,10,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200075,10001,NULL,NULL,'KSJ_100_2_1','KSJ_100_2_1',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,11,'{"group": 2, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200076,10001,NULL,NULL,'KSJ_100_2_2','KSJ_100_2_2',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,12,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200077,10001,NULL,NULL,'KSJ_100_2_3','KSJ_100_2_3',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,13,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200078,10001,NULL,NULL,'KSJ_100_2_4','KSJ_100_2_4',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,14,'{"group": 3, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200079,10001,NULL,NULL,'KSJ_100_3_0','KSJ_100_3_0',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,15,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09'),
(200080,10001,NULL,NULL,'KSJ_100_3_1','KSJ_100_3_1',NULL,'common','admin',NULL,'','SRID=4326;POINT (126.72312720231211 37.36922429153839)'::geometry,0.0000000,0.00000,0.00000,0.00000,NULL,NULL,1,16,'{"group": 4, "nodeType": "daejeon", "isPhysical": true, "flipYTexCoords": true, "heightReference": "none"}','use',NULL,'','',false,false,NULL,NULL,'2021-06-17 16:55:07.86006+09');
