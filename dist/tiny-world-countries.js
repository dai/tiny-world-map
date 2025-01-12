(function(){
    // This dataset is licensed under the ODbL license; attribute tinyworldmap and OpenStreetMap
    let places = {"countries":[[0.3960974922,0.7916663889,"China",0],[0.3793622522,0.2209836111,"United States",0],[0.5069004943,0.8274730556,"Indonesia",0],[0.5288604915,0.3522222222,"Brazil",0],[0.2622902428,0.7715147222,"Russia",0],[0.3688186796,0.5352063889,"Italy",0],[0.2603441809,0.4497058333,"Iceland",0],[0.1464650601,0.3810761111,"Greenland",0],[0.4732076791,0.5222222222,"Nigeria",1],[0.4323306653,0.2166452778,"Mexico",1],[0.4551781654,0.7999030556,"Vietnam",1],[0.4115123921,0.6979097222,"Pakistan",2],[0.5836512183,0.5694211111,"South Africa",1],[0.6038903003,0.3195352778,"Argentina",1],[0.2843755204,0.2000230556,"Canada",1],[0.5710734205,0.8743194444,"Australia",1],[0.3471934729,0.6854947222,"Kazakhstan",1],[0.5082854065,0.5661730556,"Congo",2],[0.4362762208,0.7185213889,"India",2],[0.3907048751,0.8867761111,"Japan",2],[0.4243774714,0.5812986111,"Egypt",2],[0.3823228212,0.5970138889,"Turkey",2],[0.3340532356,0.5290216667,"Germany",2],[0.4714827888,0.6073669444,"Ethiopia",2],[0.4886016574,0.2974755556,"Colombia",2],[0.4189276996,0.5083333333,"Algeria",2],[0.3737316752,0.6776466667,"Uzbekistan",2],[0.5191292252,0.2915391667,"Peru",2],[0.478951408,0.724205,"Sri Lanka",2],[0.434283173,0.2754641667,"Cuba",2],[0.3809868231,0.4903236111,"Spain",3],[0.2921963941,0.5403358333,"Sweden",2],[0.5666338143,0.3384186111,"Paraguay",2],[0.4612905712,0.2530163889,"El Salvador",2],[0.3524378343,0.7884722222,"Mongolia",2],[0.4403149696,0.6583436111,"Oman",2],[0.4593567087,0.4598527778,"Senegal",3],[0.4794604445,0.9178258333,"Micronesia",2],[0.4050959388,0.3201213889,"Bermuda",2],[0.4642865056,0.84092,"Philippines",3],[0.4039648956,0.6515677778,"Iran",3],[0.3533356213,0.5052452778,"France",3],[0.3177338018,0.4908983333,"United Kingdom",3],[0.3413491109,0.5868661111,"Ukraine",3],[0.5181634668,0.5994105556,"Tanzania",3],[0.4590430665,0.5819216667,"Sudan",3],[0.4959940215,0.6067538889,"Kenya",3],[0.4177364018,0.7333333333,"Nepal",3],[0.4024828815,0.6227083333,"Iraq",3],[0.4872937459,0.7840713889,"Malaysia",3],[0.4539624873,0.6330319444,"Yemen",3],[0.3772203411,0.8530194444,"North Korea",3],[0.4313730034,0.8360611111,"Taiwan",3],[0.5535522638,0.6290044444,"Madagascar",3],[0.3558209502,0.5685719444,"Romania",3],[0.4871733597,0.5365377778,"Cameroon",3],[0.4777341102,0.4845336111,"Ivory Coast",3],[0.4499283038,0.5258994444,"Niger",3],[0.5407689592,0.5765527778,"Zambia",3],[0.4538961924,0.4936388889,"Mali",3],[0.5037220059,0.2795369444,"Ecuador",3],[0.5480960384,0.3194688889,"Bolivia",3],[0.3821956153,0.5610769444,"Greece",3],[0.4560824828,0.5528211111,"Chad",3],[0.399991038,0.5261113889,"Tunisia",3],[0.4458159776,0.2990080556,"Haiti",3],[0.3237799784,0.5769363889,"Belarus",3],[0.3771477717,0.6327425,"Azerbaijan",3],[0.4099586251,0.5968319444,"Israel",3],[0.515808151,0.9006913889,"Papua New Guinea",3],[0.4226095098,0.5503436111,"Libya",3],[0.2714031081,0.5720025,"Finland",3],[0.4761343941,0.2746366667,"Panama",3],[0.5663825311,0.5481197222,"Namibia",3],[0.307171428,0.5687605556,"Latvia",3],[0.5025001028,0.5324722222,"Gabon",3],[0.4699714646,0.3303222222,"Trinidad and Tobago",3],[0.4246836631,0.6403736111,"Bahrain",3],[0.3961578462,0.5920697222,"Cyprus",3],[0.4865347983,0.3371063889,"Guyana",3],[0.5341607021,0.6230091667,"Comoros",3],[0.4877275784,0.8182372222,"Brunei",3],[0.5465541823,0.9669636111,"Vanuatu",3],[0.538621908,0.0218888889,"Sāmoa",3],[0.4990419387,0.9824005556,"Kiribati",3],[0.5129517718,0.6540388889,"Seychelles",3],[0.4566650949,0.3295405556,"Dominica",3],[0.4755628761,0.9697530556,"Marshall Islands",3],[0.278670156,0.4804658333,"Faroe Islands",3],[0.4298408509,0.750815,"Bangladesh",4],[0.4581446051,0.7800908333,"Thailand",4],[0.3904847979,0.8547113889,"South Korea",4],[0.3293386243,0.5531511111,"Poland",4],[0.495740047,0.5894908333,"Uganda",4],[0.4087907827,0.4796216667,"Morocco",4],[0.4002447708,0.6839958333,"Afghanistan",4],[0.4776998886,0.3163586111,"Venezuela",4],[0.4263226056,0.6176466667,"Saudi Arabia",4],[0.554661177,0.5969847222,"Mozambique",4],[0.3973152611,0.6084705556,"Syria",4],[0.4662063963,0.4953111111,"Burkina Faso",4],[0.5931258044,0.3018922222,"Chile",4],[0.5371914345,0.5942505556,"Malawi",4],[0.4648758033,0.7911513889,"Cambodia",4],[0.533232217,0.5488030556,"Angola",4],[0.5054585698,0.5835122222,"Rwanda",4],[0.4700396014,0.4702544444,"Guinea",4],[0.4766733191,0.6363427778,"Somalia",4],[0.4734068366,0.5062733333,"Benin",4],[0.3492932696,0.539235,"Austria",4],[0.4780701008,0.5824077778,"South Sudan",4],[0.368935706,0.5707936111,"Bulgaria",4],[0.3835046404,0.6967102778,"Tajikistan",4],[0.4432300482,0.7871619444,"Laos",4],[0.373045678,0.7075669444,"Kyrgyzstan",4],[0.3130246568,0.5287036111,"Denmark",4],[0.2838799119,0.5244102778,"Norway",4],[0.4551108556,0.6055555556,"Eritrea",4],[0.3808301942,0.6649791667,"Turkmenistan",4],[0.4962299252,0.7883875,"Singapore",4],[0.3263730632,0.4778347222,"Ireland",4],[0.4312930422,0.6499986111,"United Arab Emirates",4],[0.6269216817,0.9800955556,"New Zealand",4],[0.3582834221,0.5434930556,"Croatia",4],[0.3145953999,0.5659722222,"Lithuania",4],[0.4148973539,0.6319386111,"Kuwait",4],[0.5967885701,0.3443883333,"Uruguay",4],[0.442529154,0.4743336111,"Mauritania",4],[0.4486157272,0.2850144444,"Jamaica",4],[0.5661851826,0.5683136111,"Botswana",4],[0.5765793177,0.5872197222,"Eswatini",4],[0.2972037678,0.5703663889,"Estonia",4],[0.5575356934,0.6599177778,"Mauritius",4],[0.5243845673,0.8501763889,"East Timor",4],[0.4955182967,0.5292138889,"Equatorial Guinea",4],[0.4203420454,0.7514219444,"Bhutan",4],[0.5271738504,0.9523025,"Solomon Islands",4],[0.4549660987,0.43331,"Cape Verde",4],[0.3930679494,0.5401325,"Malta",4],[0.4896582857,0.7034011111,"Maldives",4],[0.451719135,0.2536502778,"Belize",4],[0.4631472488,0.3346527778,"Barbados",4],[0.3668788747,0.6145277778,"Abkhazia",4],[0.5564714541,0.0133261111,"Tonga",4],[0.342482181,0.4940672222,"Jersey",4],[0.3691873042,0.50437,"Andorra",4],[0.4759085212,0.4671111111,"Sierra Leone",5],[0.3749260243,0.5555555556,"Albania",5],[0.4669465911,0.6190147222,"Djibouti",5],[0.3525449846,0.5228666667,"Switzerland",5],[0.3646511351,0.5206325,"Monaco",5],[0.4515607035,0.7666666667,"Myanmar",5],[0.3630265834,0.5570872222,"Serbia",5],[0.3509844885,0.5541836111,"Hungary",5],[0.372406815,0.6223022222,"Georgia",5],[0.464688817,0.2630730556,"Nicaragua",5],[0.5512056591,0.9972563889,"Fiji",5],[0.4776210628,0.497,"Ghana",5],[0.3292134537,0.5156508333,"Netherlands",5],[0.5521754882,0.58263,"Zimbabwe",5],[0.3363590971,0.5129630556,"Belgium",5],[0.3402485657,0.5426058333,"Czechia",5],[0.5095234559,0.5831458333,"Burundi",5],[0.3798010521,0.4774016667,"Portugal",5],[0.4571089521,0.2609013889,"Honduras",5],[0.3445150493,0.5540358333,"Slovakia",5],[0.3998866714,0.599565,"Lebanon",5],[0.4713080598,0.2664613889,"Costa Rica",5],[0.4804163231,0.5555502778,"Central African Republic",5],[0.3505500222,0.5793530556,"Moldova",5],[0.5020178318,0.5434497222,"Congo",5],[0.4840008996,0.4739836111,"Liberia",5],[0.3690126851,0.5580613889,"Kosovo",5],[0.4669448884,0.4576802778,"Guinea-Bissau",5],[0.3399388365,0.5170269444,"Luxembourg",5],[0.428933922,0.2833330556,"The Bahamas",5],[0.4649950284,0.3056616667,"Aruba",5],[0.4514196747,0.3279013889,"Antigua and Barbuda",5],[0.4561626583,0.2490394444,"Guatemala",5],[0.4728478507,0.6278052778,"Somaliland",5],[0.4446334029,0.2762036111,"Cayman Islands",5],[0.4381623561,0.3012422222,"Turks and Caicos Islands",5],[0.4973018152,0.5195069444,"São Tomé and Príncipe",6],[0.4272167953,0.6423041667,"Qatar",6],[0.445941219,0.3047144444,"Dominican Republic",7],[0.3726439873,0.5603244444,"North Macedonia",6],[0.5861568155,0.5787083333,"Lesotho",6],[0.475515095,0.5028333333,"Togo",6],[0.408810586,0.6026155556,"Jordan",6],[0.3624377301,0.5488780556,"Bosnia and Herzegovina",6],[0.3757725562,0.6240936111,"Armenia",6],[0.3552818034,0.5411536111,"Slovenia",6],[0.4622335372,0.4569722222,"The Gambia",6],[0.4884863594,0.3442302778,"Suriname",6],[0.4612190588,0.330625,"Saint Lucia",6],[0.4660339504,0.3286377778,"Grenada",6],[0.3201641063,0.4873358333,"Isle of Man",6],[0.3699141828,0.6224941667,"South Ossetia",6],[0.3674990419,0.5542169444,"Montenegro",7],[0.4638472087,0.3297872222,"Saint Vincent and the Grenadines",7],[0.3414799162,0.4928272222,"Guernsey",7],[0.4660862281,0.3085252778,"Curacao",7],[0.3953354945,0.5934033333,"Northern Cyprus",8]],"cities":[],"paths":[]}

    // The rest of this file is licensed under the MIT license
    function drawPlaces(tile, coords, places, opts) {
    var ctx = tile.getContext('2d', {alpha: false});

    if (!places.path2ds)
        places.path2ds = places.paths.map(p => [new Path2D(p[0]), p[1]])

    let vwidth = 800, vheight = 800

    var size = {x: tile.width, y: tile.height};
    let margin1 = 2/size.x, margin2 = 35/size.x, margin3 = 50/size.x, N = Math.pow(2, coords.z);

    let lbound = coords.x / N, rbound = lbound + 1/N, tbound = coords.y / N, bbound = tbound + 1/N

    ctx.fillStyle = opts.backgroundColor || (places.path2ds.length ? "#aad3df" : 'white')
    ctx.fillRect(0, 0, size.x, size.y)

    ctx.translate(-size.x*coords.x, -size.x*coords.y)
    ctx.scale(size.x*N/vwidth,size.y*N/vheight)
    ctx.strokeStyle = opts.borderColor || '#b4a6ae'
    ctx.fillStyle = opts.borderFillColor || '#fdf9f1'
    ctx.lineWidth = (opts.borderWidth||4)/N
    ctx.lineJoin = 'round'

    let pathsToDraw = new Path2D()

    for (let [p, bounds] of places.path2ds) { // 60-100 fails
        if (!(bounds[0] > rbound || bounds[2] < lbound || bounds[1] > bbound || bounds[3] < tbound)) {
            pathsToDraw.addPath(p)
        }
    }

    if (opts.borderFillColor != 'transparent')
        ctx.fill(pathsToDraw)
    if (opts.borderStrokeColor != 'transparent')
        ctx.stroke(pathsToDraw)

    ctx.resetTransform()

    let dotColor = opts.dotColor || (places.path2ds.length ? 'transparent' : 'red')
    ctx.fillStyle = dotColor

    if (dotColor != 'transparent')
        for (let [yc, xc, name, zoom] of places.cities) {
            let y = yc * N - coords.y, x = xc * N - coords.x
            if (zoom > coords.z && y > -margin1 && y < 1+margin1 && x > -margin1 && x < 1+margin1) {
                let xS = size.x * x, yS = size.y * y
                ctx.fillRect(xS-1,yS-1,2,2)
            }
        }

    ctx.strokeStyle = opts.textStrokeColor || 'rgba(255,255,255,.8)'
    ctx.lineWidth = opts.textStrokeWidth || 3
    ctx.textAlign = 'center'
    ctx.fillStyle = opts.textFillColor || "black";
    ctx.font = opts.cityFont || '12px Arial, Helvetica, Ubuntu, sans-serif'

    for (let [yc, xc, name, zoom] of places.cities) {
        if (zoom > coords.z) continue

        let y = yc * N - coords.y, x = xc * N - coords.x
        if (y > -margin2 && y < 1+margin2 && x > -margin2 && x < 1+margin2) {

            let xS = size.x * x, yS = size.y * y
            ctx.strokeText(name, xS, yS, 70)
            ctx.fillText(name, xS, yS, 70)
        }
    }

    ctx.font = opts.countryFont || 'bold 14px Arial, Helvetica, Ubuntu, sans-serif'

    for (let [yc, xc, name, zoom] of places.countries) {
        if (zoom > coords.z || coords.z > 8) continue

        let y = yc * N - coords.y, x = xc * N - coords.x
        if (y > -margin3 && y < 1+margin3 && x > -margin3 && x < 1+margin3) {
            let xS = size.x * x, yS = size.y * y
            ctx.strokeText(name, xS, yS, 100)
            ctx.fillText(name, xS, yS, 100)
        }
    }
    return tile;
}


    L.GridLayer.TinyWorld = L.GridLayer.extend({
        createTile: function(xyz){
            // create a <canvas> element for drawing
            let tile = L.DomUtil.create('canvas', 'leaflet-tile');

            var tileSize = this.getTileSize();
            tile.setAttribute('width', tileSize.x);
            tile.setAttribute('height', tileSize.y);

            return drawPlaces(tile, xyz, places, this.options)
        },
        getAttribution: function() {
            return '&copy; <a href="https://tinyworldmap.com">tinyworldmap</a>, <a href="https://openstreetmap.org">OpenStreetMap</a>'
        }
    });
})()
