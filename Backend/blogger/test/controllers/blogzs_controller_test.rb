require "test_helper"

class BlogzsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @blogz = blogzs(:one)
  end

  test "should get index" do
    get blogzs_url, as: :json
    assert_response :success
  end

  test "should create blogz" do
    assert_difference('Blogz.count') do
      post blogzs_url, params: { blogz: { author: @blogz.author, content: @blogz.content, img: @blogz.img, name: @blogz.name, title: @blogz.title } }, as: :json
    end

    assert_response 201
  end

  test "should show blogz" do
    get blogz_url(@blogz), as: :json
    assert_response :success
  end

  test "should update blogz" do
    patch blogz_url(@blogz), params: { blogz: { author: @blogz.author, content: @blogz.content, img: @blogz.img, name: @blogz.name, title: @blogz.title } }, as: :json
    assert_response 200
  end

  test "should destroy blogz" do
    assert_difference('Blogz.count', -1) do
      delete blogz_url(@blogz), as: :json
    end

    assert_response 204
  end
end
