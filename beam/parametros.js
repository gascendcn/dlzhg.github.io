var NumIter1 = 10;
var NumIter2 = 10;
var NumModPOD = 1;
var NumGdl = 426;
var Gdl = [ 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453];

var Ai = [	
[-1.459455012659e-02, 5.046991613503e-03, 1.540411963548e-01, -1.413970164025e-02, 5.071542671379e-03, 1.541683672925e-01, -1.359498113217e-02, 5.038677843424e-03, 1.540050383845e-01, 1.462770840150e-02, 5.118161317678e-03, 1.539474137758e-01, 1.360122605012e-02, 5.097813870961e-03, 1.540224661096e-01, -2.547196391774e-03, 5.111138176068e-04, 1.648247427650e-03, -4.462178130356e-03, 5.299510664683e-04, 5.124589370548e-03, -6.179660741517e-03, 6.668465824193e-04, 1.060817820580e-02, -7.717076514875e-03, 8.275842387290e-04, 1.771559881044e-02, -9.076035520846e-03, 1.009006504886e-03, 2.624646817159e-02, -1.026218272101e-02, 1.209286117653e-03, 3.602241590973e-02, -1.129061070713e-02, 1.444053267906e-03, 4.689833392306e-02, -1.222884453081e-02, 1.710662704442e-03, 5.867343656315e-02, -1.298725745717e-02, 2.088445331996e-03, 7.119502181557e-02, -1.361684863610e-02, 2.492916293116e-03, 8.429181402888e-02, -1.401255658662e-02, 3.018963282679e-03, 9.783209588501e-02, -1.428583279650e-02, 3.546362449818e-03, 1.116622176478e-01, -1.446473888888e-02, 4.058865685828e-03, 1.256913920020e-01, -1.455494908010e-02, 4.573368220054e-03, 1.398332783184e-01, -1.354149771018e-02, 4.516824010747e-03, 1.398170985043e-01, -1.346734324361e-02, 3.997385278769e-03, 1.256615346563e-01, -1.323891298233e-02, 3.447946337995e-03, 1.116100306558e-01, -1.294379854634e-02, 2.871660929107e-03, 9.776109073893e-02, -1.255401158186e-02, 2.242864279738e-03, 8.417890883679e-02, -1.208575731348e-02, 1.776135536161e-03, 7.111558501192e-02, -1.150156719546e-02, 1.378290140554e-03, 5.864161955602e-02, -1.074424300444e-02, 1.063049379008e-03, 4.694829435478e-02, -9.779806669346e-03, 7.993587304558e-04, 3.609087064360e-02, -8.641576423827e-03, 5.326825152006e-04, 2.631244238219e-02, -7.333125894230e-03, 2.838453433797e-04, 1.777438299202e-02, -5.855847764386e-03, 6.211972029068e-05, 1.065554725679e-02, -4.217032991520e-03, -1.165586303619e-04, 5.146776005658e-03, -2.364385254015e-03, -2.632966949204e-04, 1.737196514722e-03, 5.509344062632e-04, 5.094287076486e-03, 1.539681366306e-01, 1.460597116532e-02, 4.600932485424e-03, 1.398206243722e-01, 1.453473317607e-02, 4.089117060770e-03, 1.256706778606e-01, 1.440391142249e-02, 3.589302339838e-03, 1.116205333631e-01, 1.407064102878e-02, 3.059634666231e-03, 9.778244980062e-02, 1.364698828282e-02, 2.560773165428e-03, 8.427280819440e-02, 1.307604546140e-02, 2.084699292320e-03, 7.120585329793e-02, 1.230324092541e-02, 1.673908850415e-03, 5.872157236457e-02, 1.137395135423e-02, 1.359362013374e-03, 4.699874819378e-02, 1.025192444156e-02, 1.079476164937e-03, 3.611841131147e-02, 9.102720241618e-03, 9.086805930567e-04, 2.635363145198e-02, 7.761780317437e-03, 7.339107466199e-04, 1.782083208602e-02, 6.237586339048e-03, 5.823989631660e-04, 1.070899597681e-02, 4.540888473649e-03, 4.774191632360e-04, 5.218206456690e-03, 2.698910143593e-03, 5.470445805900e-04, 1.649877674844e-03, 1.355660335532e-02, 4.574301922013e-03, 1.398721059479e-01, 1.344046699839e-02, 4.038524562630e-03, 1.257311933636e-01, 1.328337033896e-02, 3.495345871946e-03, 1.116940091542e-01, 1.300225066905e-02, 2.941730801318e-03, 9.785131080733e-02, 1.262022112076e-02, 2.398493335430e-03, 8.431306801010e-02, 1.215752179036e-02, 1.870095257521e-03, 7.121415787115e-02, 1.154434528563e-02, 1.423824219794e-03, 5.868638963534e-02, 1.078703278164e-02, 1.062085354604e-03, 4.689692572331e-02, 9.824459863419e-03, 7.482081062184e-04, 3.604946132208e-02, 8.689879855527e-03, 4.884989567707e-04, 2.628029471171e-02, 7.383525906396e-03, 2.489983219504e-04, 1.775137413670e-02, 5.907687595029e-03, 3.083236762722e-05, 1.064071466309e-02, 4.269336125397e-03, -1.599821190916e-04, 5.136139367674e-03, 2.485915304761e-03, -3.744208161954e-04, 1.674743419471e-03, 1.412270894848e-02, 5.104373028208e-03, 1.540003479593e-01, -4.864442868712e-04, 5.067684053957e-03, 1.540131739162e-01, -2.374078424256e-03, 8.499479071308e-05, 1.883493111982e-03, -4.424958142390e-03, 2.055785335932e-04, 5.267163538706e-03, -6.144435090051e-03, 3.617604972945e-04, 1.078344938106e-02, -7.656170913476e-03, 5.518062247198e-04, 1.788644686602e-02, -8.981674303713e-03, 7.668569118423e-04, 2.640308139726e-02, -1.013059506336e-02, 1.000157340714e-03, 3.615624742181e-02, -1.111712185596e-02, 1.238734272976e-03, 4.700800630956e-02, -1.197777542689e-02, 1.522418766916e-03, 5.874397639447e-02, -1.265461535612e-02, 1.909080996028e-03, 7.122724196696e-02, -1.325075193178e-02, 2.384478219925e-03, 8.431506571064e-02, -1.356599196492e-02, 2.955401848772e-03, 9.785418902891e-02, -1.378965748983e-02, 3.510181928806e-03, 1.116837082444e-01, -1.399239215613e-02, 4.025434784599e-03, 1.256974501177e-01, -1.408963487510e-02, 4.545724377660e-03, 1.398580032098e-01, 1.431070720580e-04, -6.350586103958e-06, 1.203221268446e-03, 2.172703092871e-04, 1.653814195990e-04, 4.881971100412e-03, 2.536409698384e-04, 3.359313193078e-04, 1.041206203642e-02, 2.760548609769e-04, 5.259282805419e-04, 1.755728555823e-02, 2.877795473399e-04, 7.398951176870e-04, 2.612394249995e-02, 2.834530082285e-04, 9.753813467473e-04, 3.593302967512e-02, 2.272355363804e-04, 1.205826789097e-03, 4.680883034573e-02, 3.865205871013e-04, 1.545383210801e-03, 5.855707808315e-02, 4.923155801562e-04, 1.972977776804e-03, 7.104953546141e-02, 5.779176911721e-04, 2.480229119853e-03, 8.417646263740e-02, 5.649916214065e-04, 2.981119508912e-03, 9.771125398857e-02, 5.468002184938e-04, 3.498907124902e-03, 1.115603859341e-01, 5.550174951757e-04, 4.037485116308e-03, 1.256486080279e-01, 5.553215058095e-04, 4.568985270366e-03, 1.398083108068e-01, 1.410278344887e-02, 4.591297522207e-03, 1.398507105426e-01, 1.399399073409e-02, 4.068168151654e-03, 1.257190592717e-01, 1.379571695514e-02, 3.515690031209e-03, 1.116943871836e-01, 1.353131695497e-02, 2.998091564644e-03, 9.785545464872e-02, 1.312344070662e-02, 2.470888453753e-03, 8.433065189238e-02, 1.262037709519e-02, 1.966126865423e-03, 7.125862627997e-02, 1.194243828374e-02, 1.526106575238e-03, 5.876278934235e-02, 1.115613820973e-02, 1.198135511503e-03, 4.700466573661e-02, 1.011378061753e-02, 9.167287238814e-04, 3.618555745106e-02, 8.936244562688e-03, 6.953472900158e-04, 2.642947403450e-02, 7.593183957173e-03, 4.879166880931e-04, 1.791277617115e-02, 6.071450601143e-03, 3.046809513080e-04, 1.080873729540e-02, 4.350767279117e-03, 1.602403992261e-04, 5.288671583895e-03, 2.285194788571e-03, 1.539043086819e-05, 1.879244780816e-03, -4.787133300850e-04, 4.554423381181e-03, 1.398444660590e-01, -4.946738213893e-04, 4.037469572547e-03, 1.256880950313e-01, -4.953859386693e-04, 3.505071654250e-03, 1.116416666424e-01, -4.845756962708e-04, 2.972937122758e-03, 9.778575082594e-02, -4.561218058922e-04, 2.442329281760e-03, 8.423467862110e-02, -4.130947913883e-04, 1.967196541219e-03, 7.108919920532e-02, -3.261003135143e-04, 1.552461403292e-03, 5.854965301680e-02, -2.292305187296e-04, 1.252174390833e-03, 4.674075240264e-02, -1.737201874027e-04, 9.776379607356e-04, 3.585257727844e-02, -1.402978964818e-04, 7.431164577248e-04, 2.605111141191e-02, -1.101509534275e-04, 5.310900981251e-04, 1.749178108510e-02, -7.833449921628e-05, 3.421194407296e-04, 1.035254744393e-02, -4.271068087199e-05, 1.800003589361e-04, 4.827995752746e-03, -4.484069280136e-05, 1.317579123731e-04, 1.181159857758e-03, 2.030781634534e-05, 5.074523609717e-03, 1.540319288107e-01, -5.497586156862e-03, 4.742758934519e-03, 1.452796245260e-01, 9.572257720534e-04, 4.323114573322e-03, 1.333490111365e-01, -5.633390646708e-03, 4.758495594751e-03, 1.453590463354e-01, 4.350579696287e-04, 1.484070091874e-05, 7.055243300111e-04, 4.121782287132e-04, 3.993149402226e-06, 4.577222430440e-04, -1.437797187418e-04, 9.879555630950e-05, 2.906161742818e-03, -9.941103782398e-05, 4.276502495663e-04, 1.395072502000e-02, -1.185401705306e-04, 2.522129723757e-04, 7.594766050124e-03, -8.078711057375e-05, 6.296302675112e-04, 2.180707206900e-02, 6.095661409203e-03, 4.792947923909e-03, 1.457400186100e-01, -5.350247951449e-04, -8.041735157736e-05, 4.970100013122e-04, -5.853034566740e-05, 8.551718001310e-04, 3.098714936214e-02, -5.420950255270e-04, 1.297222056209e-04, 6.677327985511e-04, -2.696509396628e-03, 2.167364032634e-03, 7.694059887050e-02, -1.122670434910e-03, 1.749616257858e-03, 6.534654454663e-02, 1.200132568092e-06, 2.705657102824e-03, 9.099552078051e-02, -2.819831817665e-05, 1.107013147634e-03, 4.131604687092e-02, -1.057292446900e-03, 1.375871138891e-03, 5.315161593480e-02, -1.653130949890e-06, 3.236256753668e-03, 1.047021354947e-01, -2.889706228045e-03, 3.836326454712e-03, 1.206387149459e-01, 6.811645320842e-03, 4.824840185847e-03, 1.469371860794e-01]]

var U0 = -50;
var U1 = 50;
var tamu = 299;
var V0 = -500;
var V1 = 500;
var tamv = 299;
var A0 = -1000;
var A1 = 1000;
var tama = 299;

var Vf = [ [-1.375813040284e-04, 0.0] ];

var Velf = [ [0.000000000000e+00, 0.0] ];

var Acelf = [ [0.000000000000e+00, 0.0] ];