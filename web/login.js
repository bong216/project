<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width", initial-scale="1">
	<link rel ="stylesheet" href="css/bootstrap.css">
	<link rel ="stylesheet" href="css/custom.css">
	<title>로그인 페이지</title>
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script type="text/javascript">
	function registerCheckfunction() {
		var userID = $('#userID').val();
		$.ajax({
			type: 'POST',
			url: './UserRegisterCheckServlet',
			data: { userID : userID },
			success: function(result) {
				if(result == 1) {
					$('#checkMessage').html('사용할 수 있는 아이디입니다.');
					$('#checkType').attr('class', 'modal-content panel-success');
				}
				else {
					$('#checkMessage').html('사용할 수 없는 아이디입니다.');
					$('#checkType').attr('class', 'modal-content panel-warning');
				}
				$('#checkModal').modal("show");
			}
		})
	}
	function passwordCheckFunction() {
		var userPassword1 = $('#userPassword1').val();
		var userPassword2 = $('#userPassword2').val();
		if(userPassword1 != userPassword2) {
			$('#passwordCheckMessage').html('비밀번호가 서로 일치하지 않습니다.');
		} else {
			$('#passwordCheckMessage').html('');
		}
	}
	
</script>
</head>
<body>
<body>
	<div class="container">
		<form method="post" action="./userRegister">
			<table class="table table-bordered table-hover" style="text-align: center; border : 1px solid #dddddd">
				<thead>
					<tr>
						<th colspan="3"><h4>회원 등록 양식</h4></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="width: 110px;"><h5>아이디</h5></td>
						<td><input class="form-control" type="text" id="userID" name="userID" maxlength="20" placeholder="아이디를 입력해주세요"></td>
						<td style="width : 110px;"><button class="btn btn-promary" onclick="registerCheckfunction();" type="button">중복 체크</button></td>
					</tr>
					<tr>
						<td style="width: 110px;"><h5>비밀번호 </h5></td>
						<td colspan="2"><input class="form-control" type="password" onkeyup="passwordCheckFunction()" id="userPassword1" name="userPassword1" maxlength="20"  placeholder="비밀번호를 입력해주세요"></td>
					</tr>
					<tr>
						<td style="width: 110px;"><h5>비밀번호 확인 </h5></td>
						<td colspan="2"><input class="form-control" type="password" id="userPassword2" name="userPassword2" maxlength="20"  placeholder="비밀번호 확인을 입력해주세요"></td>
					</tr>
					<tr>
						<td style="text-align: left" colspan="3"><h5 style="color: red;" id="passwordCheckMessage"></h5><input class="btn btn-primary pull-right" type="submit" value="회원가입"></td>
					</tr>
				</tbody>
		</table>
		</form>
	</div>
	
	
	<script>
		$('#messageModal').modal("show");
	</script>
	<div class="modal fade" id="messagModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="vertical-alignment-helper">
			<div class="modal-dialog vertical-align-center">
				<div id="checkType" class="modal-content panel-info">
					<div class="modal-header panel-heading">
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
						<h4 class="modal-title">
							확인 메시지
						</h4>
					</div>
					<div class="modal-body" id="checkMessage">
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal">확인</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</body>
</html>