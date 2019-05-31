____________________________________________________________________
|------------------------------------------------------------------|
|-----------------------*Class CollisionBox*-----------------------|
|------------------------------------------------------------------|

*Construtor:
CollisionBox(originX, originY, width,height) 
onde: 

originX --> posição X do canto superior esquerdo da caixa de colisão
originY --> posição Y do canto superior esquerdo da caixa de colisão
width --> largura total da caixa de colisão
height --> altura total da caixa de colisão


*Função de detectar colisão
detectCollision(theOther)
onde:

theOther --> outra caixa de colisão que queira detectar se colidiu com a caixa de colisão que champou essa função

-exemplo: caixa1.detectCollision(caixa2);

O retorno dessa função é um boolean.
____________________________________________________________________________
|--------------------------------------------------------------------------|
|----------------------*Class LabelText*-----------------------------------|
|--------------------------------------------------------------------------|

*construtor:
LabelText(originX,originY,textString)
onde:

originX --> posição X da origem do texto
originY --> posição Y da origem do texto
textString --> texto a ser desenhado

*Função desenhar:

drawText()

A função desenha o texto.
____________________________________________________________________________
----------------------------------------------------------------------------
--------------------*Class ImageSprite*-------------------------------------
----------------------------------------------------------------------------

*Construtor:
ImageSprite(spr_image, originX,originY,width,height)
onde:

spr_image --> imagem a ser desenhada
originX --> posição X do canto superior esquerdo da imagem
originY --> posição Y do canto superior esquerdo da imagem
width --> largura total da imagem
height --> altura total da imagem

!!! obs: a imagem será esticada caso não mantenha a proporção !!!

*Função desenhar

drawImageSprite()

a função desenha a imagem, nas devidas proporções.


