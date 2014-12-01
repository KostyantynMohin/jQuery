(function ($) {
	
	var methods = {

		init: function()
		{
			var items  = $(this);
			var height = methods.getMaxHeight(items);

			methods.setHeight(items,height);

		},
		getMaxHeight: function(items)
		{
			var max = 0;

			itmes.each(function(){
				max = Math.max(max, $(this).height() );
			});

			return max;
		},
		setHeight: function(items,height)
		{

			items.each(function(){
				$(this).height(height);
			});
			
		}
	};


	$.fn.hightinize = function( method ) {

		if ( methods[method] ) 
		{
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if ( typeof method === 'object' || !method )
		{
			return methods.init.apply( this, arguments );
		}
		else
		{
			$.error('Method with name ' + method + 'does not exist!');
		}
	};


})(jQuery);