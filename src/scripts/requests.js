(function() {

    // xhr-запрос
    const url = 'https://webdev-api.loftschool.com/sendmail';
    var deliveryForm = document.querySelector('#deliveryForm');
    var submitButtom = document.querySelector('#submitButtom');
    const alertMessage = 'Произошел сбой при отправке заказа';
    var submitButtom = document.querySelector('#submitButtom');
    
    var dataObj = [
        inputName = document.querySelector('#name'),
        inputPhone = document.querySelector('#phone'),
        deliveryComment = document.querySelector('#comment')
    ]
    
    var flag;
    
    function sendData(url) {                                                                //создание xhr запроса
        return new Promise((resolve, reject) => {
        var formData = new FormData(deliveryForm);
        formData.append('to', 'sapsanno@gmail.com');
    
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
    
        xhr.open('POST', url);
        //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(formData);
        
            xhr.addEventListener('load', () => {
                if (xhr.status <= 400) {             
                    resolve(xhr.response.message);
                    
                } else {
                    reject(xhr.response);                                                   //null            
                    }
            });
    
        });
    };
    
    function showModalMessage (messageObj) {                                                // показ и скрытие окна с сообщением об отправке/ошибке
        var div = document.getElementsByClassName('modal-window-message')[0];
            div.textContent = (!messageObj) ? alertMessage  : messageObj;                   //если не false(null), то показать ответ, иначе - шаблонный ответ
            div.classList.add('is-active');
            setTimeout(deleteModalMessage, 	2000);
    
        function deleteModalMessage() {
            div.classList.remove('is-active');
            div.textContent = '';
        }
    };
    
    function showAlert(el) {                                                                // показ и скрытие div с предупреждением о необходимости заполенния
        var div = createAlert();
        el.parentElement.style.position = 'relative'; 
        el.parentElement.appendChild(div);
        el.style.borderColor = 'red';
    
        (function () {
            setTimeout(() => {
                div.remove();
                el.style.borderColor = '';
                el.parentElement.style.position = ''; 
            }, 1500);
        })();   
    }
    
    function checkSpace(input) {                                                            //проверка на пустое поле
        flag = true;                                                                        //флаг для определения, все ли поля заполнены
        return new Promise((resolve) => {
    
            input.forEach(function(el) {                                                    //последовательный показ div с предупреждением если поле пустое
                if (el.value == '') {
                    flag = false;
                    resolve(el);
                }  else ;
            });
        });
    }
    
    function createAlert() {                                                                // создание div с предупреждением            
        var div = document.createElement('div');
        div.classList.add('alert-text');
        div.textContent = 'Это поле дожно быть заполнено';
        return div;
    }
    
    function sendMessage(event) {                                                           //отправка сообщения
            event.preventDefault();
        checkSpace(dataObj)                                                                 //проверка на пустое поле
        .then((el) => showAlert(el));
        if (flag) {                                                                         //если полей пустых нет, то отправить сообщение и показать соответсвующее сообщение
            sendData(url)
            .then(value => showModalMessage(value))
            .catch(value => showModalMessage(value));
        }
    }
    
    submitButtom.addEventListener('click', sendMessage);
    
})();
