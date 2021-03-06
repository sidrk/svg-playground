// TODO: Change jQuery to VanillaJS

/** 
 * rows - letters labelled a,b,c,d
 * columns - numbers labelled 1,2,3,4
 */
$(function() {
    // re-useable and global variables
    var row;
    var blockName;
    var step = 22.2; // The % of each block

    /*
     * Helper functions() => [zeroIndexedCoordinates, cssTranslate]
     */

    // calculates blocks (x,y) co-ordinates based on className
    function zeroIndexedCoordinates(className) {
        var charX = (className.length > 2) ? className.charAt(2) : className.charAt(1);
        var gridX = charX.charCodeAt(0) - '1'.charCodeAt(0) + 1;
        var gridY = className.charAt(0).charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        return {
            x: gridX,
            y: gridY
        };
    }

    // calculates the starting and ending positions using the block names (currentPos and endPos)
    function cssTranslate(currentPos, endPos, hideAfter) {

        // unhiding previously hidden blocks
        $('.' + currentPos).css('opacity', '1');

        var pos1 = zeroIndexedCoordinates(currentPos);
        var pos2 = zeroIndexedCoordinates(endPos);

        var finalX = step * (pos2.x - pos1.x);
        var finalY = step * (pos2.y - pos1.y);

        $('.' + currentPos).css('transform', 'translate(' + finalX + '%,' + finalY + '%' + ')');

        if (hideAfter) {
            setTimeout(function () {
                $('.' + currentPos).css('opacity', '0');
            }, transitionTime * 0.2);
        }
      
    }

    
    var transitions = [];
    var transitionTime = 1000; // ms

    $('.block').css('transform', 'translate(0%, 0%)');

    transitions.push(function () {
        cssTranslate('b2', 'a2', true);
        cssTranslate('b3', 'a3', true);
        cssTranslate('c2', 'd2', true);
        cssTranslate('c3', 'd3', true)
        cssTranslate('d4', 'd3', true);
        $('.product').html("QuoteFX");
    });

    transitions.push(function () {
        cssTranslate('a2', 'b2');
        cssTranslate('a3', 'c3');
        cssTranslate('b3', 'a3');
        cssTranslate('d3', 'd4');
        $('.product').html("QuoteWin");
    });

    transitions.push(function () {
        cssTranslate('a1', 'a2');
        cssTranslate('b3', 'b3');
        cssTranslate('a4', 'a3');
        cssTranslate('d1', 'd2');
        cssTranslate('d2', 'c2');
        cssTranslate('d3', 'd3');
        $('.product').html("OEMsTrade");
    })

    transitions.push(function () {
        cssTranslate('a2', 'a1');
        cssTranslate('b3', 'a4');
        cssTranslate('d2', 'd1');
        cssTranslate('d4', 'd4');
        $('.product').html("Parts.io");
    });

    transitions.push(function () {
        // Values beyond the grid will still work
        cssTranslate('b4', 'b6', true);
        cssTranslate('a3', 'f3', true);
        cssTranslate('c1', 'c0/', true);
        $('.product').html("SupplyFX");
    })

    transitions.push(function () {
        cssTranslate('a2', 'b1');
        cssTranslate('b3', 'a3', true);
        cssTranslate('b1', 'c1');
        cssTranslate('c4', 'b4');
        cssTranslate('d2', 'd2', true);
        cssTranslate('d4', 'c4');
        $('.product').html("Findchips");
    })

    transitions.push(function () {
        cssTranslate('a1', 'a1');
        cssTranslate('a4', 'a4');
        cssTranslate('a2', 'b2');
        cssTranslate('c4', 'b3');
        cssTranslate('b1', 'c2');
        cssTranslate('d4', 'c3');
        cssTranslate('d1', 'd1');
        cssTranslate('d3', 'd4');
        $('.product').html("Hackaday.io");
    });

    transitions.push(function () {
        cssTranslate('b2', 'b2');
        cssTranslate('b3', 'b3');
        cssTranslate('a2', 'b1');
        cssTranslate('c4', 'b4');
        cssTranslate('c2', 'd2');
        cssTranslate('c3', 'd3');

        cssTranslate('d1', 'c1');
        cssTranslate('d3', 'c4');
        $('.product').html("Tindie");
    })

    transitions.push(function () {
        cssTranslate('a4', 'b4');
        cssTranslate('b2', 'a2');
        cssTranslate('b3', 'a3');
        cssTranslate('c4', 'c4');
        cssTranslate('d4', 'b3');
        cssTranslate('d3', 'd4');
        $('.product').html("DesignLab");
    });

    transitions.push(function () {
        cssTranslate('b2', 'b2');
        cssTranslate('b3', 'a4');
        cssTranslate('c2', 'd1');
        cssTranslate('c3', 'c3');
        $('.product').html("Hackaday.com");
    })

    transitions.push(function () {
        cssTranslate('b2', 'a2');
        cssTranslate('d4', 'a3');
        cssTranslate('a4', 'b1', true);
        cssTranslate('c4', 'c1', true);
        cssTranslate('d3', 'd1', true);
        $('.product').html("EEFocus");
    });

    transitions.push(function () {
        cssTranslate('a2', 'b4');
        cssTranslate('c4', 'c4');
        cssTranslate('d3', 'd4');
        $('.product').html("API");
    });

    // Finally change it back to SupplyFrame
    transitions.push(function () {
        for (var i=1; i<=4 ; i++) {
            row = String.fromCharCode(96 + i);
            for (var col=1; col<=4 ; col++) {
                blockName = row + col;
                cssTranslate('' + blockName, '' + blockName);
            }
        }
        $('.frame').css('visibility', 'visible');        
        $('.product').html("Supplyframe");
    });

    // transitions.push( function () {
    //     $('.svg').addClass('outro');
    //     $('.product').addClass('text-anime');
    // });

    var sum = 0;
    for (var i = 0; i < transitions.length; i++) {
        sum = i + sum;
        // time = ((i+2)*transitionTime - (sum*25));
        time = ((i+1)*transitionTime);
        console.log(time);
        setTimeout(transitions[i], time);
    }
});

