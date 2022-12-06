import {getCredits} from "../middleware/getCredits";


const testObject ={"id":488,"cast":[{"adult":false,"gender":2,"id":4110,"known_for_department":"Acting","name":"Humphrey Bogart","original_name":"Humphrey Bogart","popularity":14.664,"profile_path":"/1mozf4voBHpEYZYT0fGI5QzHf8M.jpg","cast_id":5,"character":"Charlie Allnut","credit_id":"52fe4249c3a36847f8012573","order":0},{"adult":false,"gender":1,"id":6598,"known_for_department":"Acting","name":"Katharine Hepburn","original_name":"Katharine Hepburn","popularity":4.086,"profile_path":"/hzBSOe6bburyMeeCqD9kR9tRfdD.jpg","cast_id":6,"character":"Rose Sayer","credit_id":"52fe4249c3a36847f8012577","order":1},{"adult":false,"gender":2,"id":6599,"known_for_department":"Acting","name":"Robert Morley","original_name":"Robert Morley","popularity":5.086,"profile_path":"/38Ms5ijBMIZNA4cwhiRvmBM0fOS.jpg","cast_id":7,"character":"The Brother","credit_id":"52fe4249c3a36847f801257b","order":2},{"adult":false,"gender":2,"id":6600,"known_for_department":"Acting","name":"Peter Bull","original_name":"Peter Bull","popularity":3.532,"profile_path":"/cflWPWjQIj3BGlrqgwKV3J3S9ui.jpg","cast_id":8,"character":"Captain of Louisa","credit_id":"52fe4249c3a36847f801257f","order":3},{"adult":false,"gender":2,"id":6609,"known_for_department":"Acting","name":"Theodore Bikel","original_name":"Theodore Bikel","popularity":4.399,"profile_path":"/adBcHpbwPTaGoJZUZBxnzI0jWV1.jpg","cast_id":17,"character":"First Officer","credit_id":"52fe4249c3a36847f80125b3","order":4},{"adult":false,"gender":2,"id":6610,"known_for_department":"Acting","name":"Walter Gotell","original_name":"Walter Gotell","popularity":4.242,"profile_path":"/3pz9faSRNXyXB74t9VaJlw8IR4Q.jpg","cast_id":18,"character":"Second Officer","credit_id":"52fe4249c3a36847f80125b7","order":5},{"adult":false,"gender":2,"id":6611,"known_for_department":"Acting","name":"Peter Swanwick","original_name":"Peter Swanwick","popularity":2.785,"profile_path":"/i5H6bb5O1XtRMKFYmCaOFHlcK55.jpg","cast_id":19,"character":"First Officer of Shona","credit_id":"52fe4249c3a36847f80125bb","order":6},{"adult":false,"gender":2,"id":6612,"known_for_department":"Acting","name":"Richard Marner","original_name":"Richard Marner","popularity":4.468,"profile_path":"/r9g2sRTyYztWcG3UmFTJEcuVbXI.jpg","cast_id":20,"character":"Second Officer of Shona","credit_id":"52fe4249c3a36847f80125bf","order":7}],"crew":[{"adult":false,"gender":2,"id":9915,"known_for_department":"Directing","name":"Guy Hamilton","original_name":"Guy Hamilton","popularity":4.764,"profile_path":"/xXRi72ziu0jE6g3k37mxzk4E2oD.jpg","credit_id":"5f8b8dbc90fca300350865bf","department":"Directing","job":"Assistant Director"},{"adult":false,"gender":2,"id":9867,"known_for_department":"Camera","name":"Ted Moore","original_name":"Ted Moore","popularity":1.226,"profile_path":null,"credit_id":"5f8b8ea6cb80280038035484","department":"Camera","job":"Camera Operator"},{"adult":false,"gender":2,"id":6593,"known_for_department":"Directing","name":"John Huston","original_name":"John Huston","popularity":9.97,"profile_path":"/5sUmPA9XjEV05lhNAypxwbnjzJ7.jpg","credit_id":"615fa02c67e0f7008a711337","department":"Writing","job":"Screenplay"},{"adult":false,"gender":2,"id":6593,"known_for_department":"Directing","name":"John Huston","original_name":"John Huston","popularity":9.97,"profile_path":"/5sUmPA9XjEV05lhNAypxwbnjzJ7.jpg","credit_id":"52fe4249c3a36847f801255d","department":"Directing","job":"Director"},{"adult":false,"gender":2,"id":6594,"known_for_department":"Production","name":"Sam Spiegel","original_name":"Sam Spiegel","popularity":2.302,"profile_path":"/zM5qW22AbzXUE626uZD0OXNzDWD.jpg","credit_id":"52fe4249c3a36847f8012563","department":"Production","job":"Producer"},{"adult":false,"gender":2,"id":6595,"known_for_department":"Writing","name":"C. S. Forester","original_name":"C. S. Forester","popularity":0.829,"profile_path":"/pBblFIZLuKjRaMDINgkPHAFV3Ej.jpg","credit_id":"5f0d42807a3c52003a1719a8","department":"Writing","job":"Novel"},{"adult":false,"gender":2,"id":6596,"known_for_department":"Writing","name":"James Agee","original_name":"James Agee","popularity":2.156,"profile_path":"/aQu7IyeVKOoxTVKzatn2cGrR4UJ.jpg","credit_id":"615fa021c3aa3f0045555ee9","department":"Writing","job":"Screenplay"},{"adult":false,"gender":0,"id":6601,"known_for_department":"Production","name":"John Woolf","original_name":"John Woolf","popularity":0.98,"profile_path":null,"credit_id":"52fe4249c3a36847f8012585","department":"Production","job":"Producer"},{"adult":false,"gender":2,"id":6603,"known_for_department":"Camera","name":"Jack Cardiff","original_name":"Jack Cardiff","popularity":4.179,"profile_path":"/1xiGGQ64mlDmgUOuSQsJdGLg6qn.jpg","credit_id":"52fe4249c3a36847f8012591","department":"Camera","job":"Director of Photography"},{"adult":false,"gender":2,"id":6604,"known_for_department":"Editing","name":"Ralph Kemplen","original_name":"Ralph Kemplen","popularity":1.4,"profile_path":null,"credit_id":"52fe4249c3a36847f8012597","department":"Editing","job":"Editor"},{"adult":false,"gender":2,"id":6605,"known_for_department":"Art","name":"Wilfred Shingleton","original_name":"Wilfred Shingleton","popularity":0.6,"profile_path":null,"credit_id":"52fe4249c3a36847f801259d","department":"Art","job":"Art Direction"},{"adult":false,"gender":1,"id":6606,"known_for_department":"Costume \u0026 Make-Up","name":"Connie De Pinna","original_name":"Connie De Pinna","popularity":0.6,"profile_path":null,"credit_id":"52fe4249c3a36847f80125a3","department":"Costume \u0026 Make-Up","job":"Costume Design"},{"adult":false,"gender":1,"id":6607,"known_for_department":"Costume \u0026 Make-Up","name":"Doris Langley Moore","original_name":"Doris Langley Moore","popularity":0.6,"profile_path":null,"credit_id":"52fe4249c3a36847f80125a9","department":"Costume \u0026 Make-Up","job":"Costume Design"},{"adult":false,"gender":2,"id":6608,"known_for_department":"Crew","name":"Cliff Richardson","original_name":"Cliff Richardson","popularity":1.428,"profile_path":null,"credit_id":"52fe4249c3a36847f80125af","department":"Crew","job":"Special Effects"},{"adult":false,"gender":2,"id":9951,"known_for_department":"Production","name":"Kevin McClory","original_name":"Kevin McClory","popularity":0.606,"profile_path":null,"credit_id":"55181eb39251416f0000449d","department":"Sound","job":"Boom Operator"},{"adult":false,"gender":0,"id":12247,"known_for_department":"Sound","name":"John W. Mitchell","original_name":"John W. Mitchell","popularity":0.6,"profile_path":null,"credit_id":"5b86b3b4c3a3683f8800d45f","department":"Sound","job":"Sound Recordist"},{"adult":false,"gender":0,"id":14748,"known_for_department":"Costume \u0026 Make-Up","name":"George Frost","original_name":"George Frost","popularity":0.6,"profile_path":null,"credit_id":"5b86b3ce0e0a26110d00de3c","department":"Costume \u0026 Make-Up","job":"Makeup Artist"},{"adult":false,"gender":2,"id":21783,"known_for_department":"Camera","name":"Edward Scaife","original_name":"Edward Scaife","popularity":0.626,"profile_path":null,"credit_id":"5f8b8d5ca13533003715c484","department":"Camera","job":"Second Unit Director of Photography"},{"adult":false,"gender":2,"id":64823,"known_for_department":"Directing","name":"Desmond Davis","original_name":"Desmond Davis","popularity":4.128,"profile_path":"/eR4RqmckRfeYsBOrCGAPhHvojoh.jpg","credit_id":"5cc072f70e0a2654e9f27e30","department":"Camera","job":"Clapper Loader"},{"adult":false,"gender":1,"id":108656,"known_for_department":"Directing","name":"Angela Allen","original_name":"Angela Allen","popularity":0.972,"profile_path":null,"credit_id":"5f8b8f1eefd3c200373891ad","department":"Directing","job":"Continuity"},{"adult":false,"gender":2,"id":957776,"known_for_department":"Art","name":"John Hoesli","original_name":"John Hoesli","popularity":1.176,"profile_path":null,"credit_id":"5f8b8ddfd05a030035dc148f","department":"Art","job":"Assistant Art Director"},{"adult":false,"gender":0,"id":958429,"known_for_department":"Production","name":"Leigh Aman","original_name":"Leigh Aman","popularity":0.6,"profile_path":null,"credit_id":"5f8b8d8cefd3c200393af187","department":"Production","job":"Production Manager"},{"adult":false,"gender":0,"id":1581380,"known_for_department":"Costume \u0026 Make-Up","name":"Eileen Bates","original_name":"Eileen Bates","popularity":0.6,"profile_path":null,"credit_id":"5f8b8ec8efd3c200373890d0","department":"Costume \u0026 Make-Up","job":"Hairstylist"},{"adult":false,"gender":0,"id":1582132,"known_for_department":"Sound","name":"Eric Wood","original_name":"Eric Wood","popularity":0.6,"profile_path":null,"credit_id":"5b86b3c1c3a3683f8800d46c","department":"Sound","job":"Sound Editor"},{"adult":false,"gender":2,"id":1627145,"known_for_department":"Sound","name":"Allan Gray","original_name":"Allan Gray","popularity":0.6,"profile_path":null,"credit_id":"5748d66ec3a36833990000d2","department":"Sound","job":"Original Music Composer"},{"adult":false,"gender":0,"id":1649801,"known_for_department":"Sound","name":"T.S. Lyndon-Haynes","original_name":"T.S. Lyndon-Haynes","popularity":0.6,"profile_path":null,"credit_id":"5f8b8f6b57176f0035845ab3","department":"Production","job":"Production Manager"},{"adult":false,"gender":0,"id":2168615,"known_for_department":"Costume \u0026 Make-Up","name":"Vi Murray","original_name":"Vi Murray","popularity":0.6,"profile_path":null,"credit_id":"5f8b8f093927120038255d7b","department":"Costume \u0026 Make-Up","job":"Wardrobe Master"},{"adult":false,"gender":2,"id":2261124,"known_for_department":"Directing","name":"Bill Herlihy","original_name":"Bill Herlihy","popularity":0.6,"profile_path":null,"credit_id":"5c962c52925141731877e711","department":"Directing","job":"Third Assistant Director"},{"adult":false,"gender":0,"id":3262577,"known_for_department":"Sound","name":"Norman del Mar","original_name":"Norman del Mar","popularity":0.6,"profile_path":null,"credit_id":"615fa06ee004a6008649784e","department":"Sound","job":"Conductor"}]}
test('Successful api call, returns an object of type Credits',async ()=>{
    const response = await getCredits(488)
    expect(response).toEqual(testObject)
})
test('Unsuccessful api call, returns an object of type Credits',async ()=>{
    const response = await getCredits(0)
    expect(response).toEqual(404)
})