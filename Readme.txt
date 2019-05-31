____________________________________________________________________
|------------------------------------------------------------------|
|-----------------------*Class CollisionBox*-----------------------|
|------------------------------------------------------------------|

*Construtor:
CollisionBox(originX, originY, width,height) 
onde: 

originX --> posi��o X do canto superior esquerdo da caixa de colis�o
originY --> posi��o Y do canto superior esquerdo da caixa de colis�o
width --> largura total da caixa de colis�o
height --> altura total da caixa de colis�o


*Fun��o de detectar colis�o
detectCollision(theOther)
onde:

theOther --> outra caixa de colis�o que queira detectar se colidiu com a caixa de colis�o que champou essa fun��o

-exemplo: caixa1.detectCollision(caixa2);

O retorno dessa fun��o � um boolean.
____________________________________________________________________________
|--------------------------------------------------------------------------|
|----------------------*Class LabelText*-----------------------------------|
|--------------------------------------------------------------------------|

*construtor:
LabelText(originX,originY,textString)
onde:

originX --> posi��o X da origem do texto
originY --> posi��o Y da origem do texto
textString --> texto a ser desenhado

*Fun��o desenhar:

drawText()

A fun��o desenha o texto.
____________________________________________________________________________
----------------------------------------------------------------------------
--------------------*Class ImageSprite*-------------------------------------
----------------------------------------------------------------------------

*Construtor:
ImageSprite(spr_image, originX,originY,width,height)
onde:

spr_image --> imagem a ser desenhada
originX --> posi��o X do canto superior esquerdo da imagem
originY --> posi��o Y do canto superior esquerdo da imagem
width --> largura total da imagem
height --> altura total da imagem

!!! obs: a imagem ser� esticada caso n�o mantenha a propor��o !!!

*Fun��o desenhar

drawImageSprite()

a fun��o desenha a imagem, nas devidas propor��es.


