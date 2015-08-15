/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 <script>
var pathObj = {
    "photo": {
        "strokepath": [
            {
                "path": "M29.514,48.73c0,21.888,0.336,43.762,0.338,65.64  c0.001,6.145-0.215,12.924,2.318,18.718c2.08,4.757,10.188,7.448,14.999,9.306c3.002,1.159,6.059,1.758,9.312,1.944  c12.121,0.694,24.531,0.159,36.668,0.017c12.928-0.151,25.851-0.355,38.789-0.355c6.113,0,12.134,0.32,18.261,0.338  c2.758,0.008,4.977,0.226,7.184-1.57c0.936-0.762,1.353-2.103,2.3-2.898c1.535-1.287,4.39-1.302,5.673-2.619  c2.017-2.07,1.323-5.086,1.321-7.879c-0.005-5.252,0-10.504,0-15.756c0-12.292-1.425-24.583-1.351-36.786  c0.028-4.694,0.785-8.771-2.037-12.559c-3.08-4.134-5.87-5.573-11.239-6.419c-16.738-2.639-34.044-1.577-50.952-1.683  c-13.983-0.088-27.9-1.498-41.878-1.359c-5.299,0.053-13.763,2.124-18.903,0.362c-1.533-0.526-2.522-2.137-4.467-2.644  c-1.708-0.445-3.495-0.645-5.322-0.759",
                "duration": 1400
            },
            {
                "path": "M98.77,81.5c2.161-7.275-19.044,0.583-20.56,1.622  c-5.796,3.97-11.26,8.985-11.2,16.548c0.036,4.577,2.964,9.141,5.433,12.864c2.373,3.58,3.225,8.945,6.711,11.386  c7.096,4.969,19.893,3.222,26.996-0.211c10.592-5.119,14.898-17.021,16.994-27.952c0.944-4.926-0.817-10.296-6.016-11.223  c-4.275-0.762-9.287,0.19-13.289-2.08c-2.439-1.383-3.176-3.72-6.42-3.319",
                "duration": 800
            },
            {
                "path": "M116.676,66.297c-0.168,6.109,4.613,6.393,10.047,6.756  c3.5,0.234,7.829,0.531,11.33,0.017c3.107-0.456,3.351-0.872,3.218-3.272c-0.087-1.567-3.487-6.444-5.006-7.24  c-1.29-0.675-2.215-0.641-3.997-0.653c-2.541-0.016-5.083,0-7.625,0c-5.098,0-7.834-0.385-7.629,5.405",
                "duration": 600
            },
            {
                "path": "M41.676,55.486c0-2.216-0.783-6.757,0.315-8.792  c1.637-3.035,8.954-4.121,11.846-3.046c4.829,1.794,6.685,7.445,5.069,12.175",
                "duration": 600
            },
            {
                "path": "M96.743,86.568c-4.955-2.149-8.361-1.058-13.083,1.622  c-4.332,2.458-4.74,7.176-5.168,11.917c-0.506,5.61,0.89,15.698,4.62,20.14c2.738,3.261,12.989,4.794,16.684,3.076  c2.993-1.392,6.247-10.72,7.051-14.484c0.634-2.97,0.942-7.994-0.045-10.951c-0.912-2.733-3.13-4.994-5.403-6.588  c-1.703-1.195-4.309-1.349-4.317-3.717",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 200,
            "height": 200
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('.logo').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#000000"
}).lazylinepainter('paint'); 
 });
 
 		/*$(document).ready(function() {
			function reverseL() 
				$('#lp1').removeClass('path')
				$('#lp2').removeClass('path')
				$('#lp3').removeClass('path')
				$('#lp4').removeClass('path')
				$('#lp5').removeClass('path')
			
				$('#lp1').addClass('rpath')
				$('#lp2').addClass('rpath')
				$('#lp3').addClass('rpath')
				$('#lp4').addClass('rpath')
				$('#lp5').addClass('rpath')
			}
			function reverseM() {
				$('#mp1').removeClass('path')
				$('#mp2').removeClass('path')
				$('#mp3').removeClass('path')
				$('#mp4').removeClass('path')
				$('#mp5').removeClass('path')
			
				$('#mp1').addClass('rpath')
				$('#mp2').addClass('rpath')
				$('#mp3').addClass('rpath')
				$('#mp4').addClass('rpath')
				$('#mp5').addClass('rpath')
			}
			function reverseW() {
				$('#wp1').removeClass('path')
				$('#wp2').removeClass('path')
				$('#wp3').removeClass('path')
				$('#wp4').removeClass('path')
				$('#wp5').removeClass('path')	
	
				$('#wp1').addClass('rpath')
				$('#wp2').addClass('rpath')
				$('#wp3').addClass('rpath')
				$('#wp4').addClass('rpath')
				$('#wp5').addClass('rpath')			
			}
			function l() {
				$('#lp1').addClass('path')
				$('#lp2').addClass('path')
				$('#lp3').addClass('path')
				$('#lp4').addClass('path')
				$('#lp5').addClass('path')
			}
			function m() {
				$('#mp1').addClass('path')
				$('#mp2').addClass('path')
				$('#mp3').addClass('path')
				$('#mp4').addClass('path')
				$('#mp5').addClass('path')
			}
			function reverseW() {
				$('#wp1').addClass('path')
				$('#wp2').addClass('path')
				$('#wp3').addClass('path')
				$('#wp4').addClass('path')
				$('#wp5').addClass('path')			
			}
			$('.logo').mouseover(function() {
				reverseL();
				$('#lp1').removeClass('path')
				$('#lp2').removeClass('path')
				$('#lp3').removeClass('path')
				$('#lp4').removeClass('path')
				$('#lp5').removeClass('path')
			
				$('#lp1').addClass('rpath')
				$('#lp2').addClass('rpath')
				$('#lp3').addClass('rpath')
				$('#lp4').addClass('rpath')
				$('#lp5').addClass('rpath')
			});
			$('.logo').mouseout(function() {
				l();
			});
	
			
			$('.web').mouseover(function() {
				reverseW();
			});
			$('.web').mouseout(function() {
				w();
			});
	
			
			$('.me').mouseover(function() {
				reverseM();
			});
			$('.me').mouseout(function() {
				m();
			});
		});*/