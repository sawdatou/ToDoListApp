
function ajoutTache() {
	let newtache='<li>' +task.value +"</li>";
	taskList.innerHTML+=newtache;

	task.select();
	task.focus();
	$('#taskList').listview('refresh');

    //$("newtache").on(
    	//"swiperight", function(){ $(this).addClass('.done');},
    	//"swipeleft", function(){ $(this).hide("slow");})

	$(newtache).on("swiperight", gererswipeRight());
	$(newtache).on("swipeleft", gererswipeLeft());

}
function deleteTaches() {
	taskList.innerHTML="";
}

function gererswipeRight(){
	$(this).addClass('.done');
}
function gererswipeLeft(){
	$(this).hide(1000);
}
/*
function gerertaskFini() {
	let newTaskFinish='<li>'+($(this).value) +"</li>";
	$('#taskList').remove('done');
	taskListFinished.innerHTML+=newTaskFinish;
	$('#taskListFinished').listview('refresh');
}
*/

