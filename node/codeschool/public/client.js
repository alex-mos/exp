$(function(){

	// Создание списка
	$.get('/blocks', appendToList);

	function appendToList(blocks) {
		var list = [];
		var content, block;

		for (var i in blocks) {
			block = blocks[i];
			content = '<a href="#" data-block="' + block + '"><i class="fa fa-trash"></i></a> ' +
					  '<a href="/blocks/' + block + '">' + block + '</a>';
			list.push($('<li>', { html: content }));
		}

		$('.block-list').append(list);
	}

	// Удаление блока
	$('.block-list').on('click', 'a[data-block]', function(event){
		event.preventDefault();

		if (!confirm('Are you sure?')) {
			return false;
		}

		var target = $(event.currentTarget); // element that was clicked

		$.ajax({
			type: 'DELETE',
			url: '/blocks/' + target.data('block')
		}).done(function(){
			target.parents('li').remove();
		});
	});

	// Сабмит формы добавления нового блока
	$('form').submit(function(e) {
		e.preventDefault();

		var form = $(this);
		var blockData = form.serialize();

		$.ajax({
			type: 'POST',
			url: '/blocks',
			data: blockData
		}).done(function(blockName) {
			appendToList([blockName]);
			form.trigger('reset'); // очищает форму
		});
	});

});